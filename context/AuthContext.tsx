import { baseurl } from "@/app/api/baseurl";
import axios from "axios";
import { createContext, ReactNode, useContext, useState } from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

interface userProps {
  name: string;
  email: string;
  username: string;
  avatar: string;
}

type AuthContextProps = {
  loading: boolean;
  token: string | null;
  user: userProps | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<userProps | null>(null);
  const [loading, setLoading] = useState(false);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const res = await axios.post(`${baseurl}/login/`, {
        email,
        password,
      });

      if (res.status === 200) {
        const token = res.data.data.token;
        const user = res.data.data;

        // Store token and user data in AsyncStorage
        await AsyncStorage.setItem("token", token);
        await AsyncStorage.setItem("user", JSON.stringify(user));

        // Update state
        setToken(token);
        setUser(user);

        router.push('/(tabs)')
      }
    } catch (err) {
      console.log(err, "error");
      Alert.alert(
        "Error",
        err.response?.data?.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    // Clear token and user data from AsyncStorage
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("user");

    // Reset state
    setToken(null);
    setUser(null);
  };

  const contextValue: AuthContextProps = {
    login,
    logout,
    loading,
    token,
    user,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};