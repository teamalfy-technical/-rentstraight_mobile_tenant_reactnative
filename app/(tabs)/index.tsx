import { View, Text, Image, FlatList, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Entypo,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import HomeTopBar from "@/components/HomeTopBar";
import { Input } from "native-base";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import VertHorView from "@/components/VertHorView";
import ListView from "@/components/ListView";
import { baseurl } from "../api/baseurl";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "@/context/AuthContext";
import BottomModal from "@/components/BottomModal";

const Home = () => {
  const { token, user } = useAuth();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    await axios
      .get(`${baseurl}/properties/`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((res) => {
        console.log(res, "response from props");
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err, "error from props");
        // Alert.alert('Error', err.response?.data?.message || 'Something went wrong')
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(user, "user data");

  const testdata = [
    { image: require("@/assets/images/bg3.jpeg") },
    { image: require("@/assets/images/bg2.png") },
    { image: require("@/assets/images/bg3.jpeg") },
    { image: require("@/assets/images/bg2.png") },
    { image: require("@/assets/images/bg2.png") },
    { image: require("@/assets/images/bg2.png") },
  ];

  const [active, setActive] = useState("horizontal");

  return (
    <SafeAreaView className="flex-1 px-5">
      <HomeTopBar />

      <View>
        <Text className="text-lg text-[#3F3F3F] font-montAlt">Welcome</Text>
        <View className="flex-row flex-wrap">
          <Text className="text-lg font-montAlt flex-shrink flex-grow">
            {user?.full_name}, Find the best
          </Text>
          <Text className="text-lg text-[#F47D7B] font-montAlt flex-shrink flex-grow">
            Rental Home Here
          </Text>
        </View>
      </View>

      <View className="mt-4">
        <Input
          type="text"
          placeholder="Search House"
          variant="filled"
          py="0"
          borderRadius="15px"
          className="bg-white text-lg font-montAlt"
          InputRightElement={
            <Image
              source={require("@/assets/images/setting.png")}
              resizeMode="cover"
              // className="w-6 h-6 mr-3"
            />
          }
        />
      </View>

      <View className="flex-row items-center justify-between my-5">
        <MaterialCommunityIcons
          style={{
            backgroundColor: active === "horizontal" ? "#F47D7B" : "white",
            padding: 10,
            borderRadius: 15,
            overflow: "hidden",
            color: active === "horizontal" ? "#fff" : "black",
          }}
          name="cards-outline"
          size={35}
          onPress={() => setActive("horizontal")}
        />
        <MaterialCommunityIcons
          name="cards-variant"
          size={35}
          style={{
            backgroundColor: active === "vertical" ? "#F47D7B" : "white",
            padding: 10,
            borderRadius: 15,
            overflow: "hidden",
            color: active === "vertical" ? "#fff" : "black",
          }}
          onPress={() => setActive("vertical")}
        />
        <FontAwesome
          name="list-ul"
          size={35}
          style={{
            backgroundColor: active === "list" ? "#F47D7B" : "white",
            padding: 10,
            borderRadius: 15,
            overflow: "hidden",
            color: active === "list" ? "#fff" : "black",
          }}
          onPress={() => setActive("list")}
        />
      </View>

      <View>
        <FlatList
          data={testdata}
          horizontal={active === "horizontal"}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) =>
            active === "horizontal" || active === "vertical" ? (
              <VertHorView item={item} active={active} />
            ) : (
              <ListView item={item} active={active} />
            )
          }
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      {loading && (
        <BottomModal
          text={"is fetching properties, please wait..."}
          loading={loading}
        />
      )}
    </SafeAreaView>
  );
};

export default Home;
