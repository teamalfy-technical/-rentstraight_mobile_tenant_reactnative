import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { router } from "expo-router";
import { useAuth } from "@/context/AuthContext";

const HomeTopBar = () => {
  const { user } = useAuth()
  console.log(user?.avatar, "avatar");
  return (
    <View className="w-full justify-between items-center flex-row">
      <Image
        source={require("@/assets/images/menu.png")}
        resizeMode="contain"
        className="w-[60px] h-[60px]"
      />
      <View className="flex-row items-center">
        <Entypo name="location-pin" size={30} color="#F47D7B" />
        <Text className="text-lg">Location</Text>
      </View>

      <Pressable onPress={() => router.push('/screens/AcceptingHouse/Accept')} className="w-[60px] h-[60px] rounded-lg items-center overflow-hidden">
      <Image
        source={{ uri: user?.avatar }}
        resizeMode="contain"
        className="w-full h-full"
      />
      </Pressable>
    </View>
  );
};

export default HomeTopBar;
