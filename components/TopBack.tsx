import { View, Text, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const TopBack = () => {
  return (
    <View className="flex-row items-center justify-between">
      <Ionicons
        name="arrow-back"
        size={35}
        color={"#F47D7B"}
        className="bg-white rounded-2xl shadow-sm"
        role="button"
        onPress={() => router.back()}
      />
      <Image
        source={require("@/assets/images/user.jpeg")}
        className="w-[60px] h-[60px] rounded-2xl"
        resizeMode="contain"
      />
    </View>
  );
};

export default TopBack;
