import { View, Text, ImageBackground, Pressable } from "react-native";
import React from "react";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useRouter } from "expo-router"; // Updated import

const VertHorView = ({ active, item }) => {
  const router = useRouter(); // Initialize the router

  return (
    <Pressable
      onPress={() => router.push({pathname: "/screens/PropertyDetails", params: item})} // Pass item correctly
      className="rounded-[20px] mr-4 overflow-hidden my-3"
      style={{
        height: hp(50),
        width: active === "horizontal" ? wp(80) : wp(90),
      }}
    >
      <ImageBackground
        className="flex-1 justify-between"
        resizeMode="cover"
        source={item.image}
      >
        <View className="absolute top-5 right-5">
          <MaterialIcons name="favorite" size={24} color="white" />
        </View>

        <View className="p-4 absolute bottom-5">
          <View className="flex-row w-full justify-between items-center">
            <Text className="font-semibold text-2xl text-white font-montAlt">
              House Name
            </Text>
            <Text className="bg-[#10AF2940] text-[#10AF29] px-2 py-1 rounded-2xl">
              Status
            </Text>
          </View>

          <Text className="text-lg text-white font-montAlt">
            Ritz, Adenta | 3.5Km away
          </Text>

          <View className="flex-row mt-2 space-x-5">
            <View className="flex-row items-center space-x-1">
              <Ionicons name="bed-outline" size={24} color="white" />
              <Text className="text-white">1</Text>
            </View>
            <View className="flex-row items-center space-x-1">
              <MaterialCommunityIcons
                name="silverware-fork-knife"
                size={24}
                color="white"
              />
              <Text className="text-white">2</Text>
            </View>
            <View className="flex-row items-center space-x-1">
              <MaterialCommunityIcons name="shower" size={24} color="white" />
              <Text className="text-white">5</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

export default VertHorView;