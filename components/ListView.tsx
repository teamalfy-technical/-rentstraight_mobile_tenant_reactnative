import { View, Text, Image } from "react-native";
import React from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const ListView = ({ active, item }: any) => {
  return (
    <View className="rounded-2xl bg-white shadow-md my-3">
      <View className="flex-row items-center space-x-5 p-3">
        <View style={{ width: wp(30) }} className="rounded-2xl overflow-hidden">
          <Image
            source={require("@/assets/images/bg3.jpeg")}
            className="w-full h-[120px]"
            resizeMode="contain"
          />
        </View>
        <View style={{ width: wp(70) }}>
          <Text className=" font-montAlt text-xl font-semibold">
            St.Patrick Estate
          </Text>
          <Text className=" font-montAlt text-sm">
            Ritz, Adenta | 3.5Km away
          </Text>
          <View className="rounded-lg bg-[#10AF2940] w-[40%]">
            <Text className="text-[#10AF29] px-2 py-1 text-center rounded-2xl">
              Available
            </Text>
          </View>
          <View className="flex-row mt-5 space-x-5">
            <View className="flex-row items-center space-x-1">
              <Ionicons name="bed-outline" size={24} color="black" />
              <Text className="text-black">1</Text>
            </View>
            <View className="flex-row items-center space-x-1">
              <MaterialCommunityIcons
                name="silverware-fork-knife"
                size={24}
                color="black"
              />
              <Text className="text-black">2</Text>
            </View>
            <View className="flex-row items-center space-x-1">
              <MaterialCommunityIcons name="shower" size={24} color="black" />
              <Text className="text-black">5</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ListView;
