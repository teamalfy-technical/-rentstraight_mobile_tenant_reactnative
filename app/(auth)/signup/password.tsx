import { View, Text, ScrollView, Pressable, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TopBar from "@/components/Topbar";
import { CustomInput } from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
// @ts-ignore
import google from "@/assets/images/google-icon.png";

const Password = () => {
  return (
    <SafeAreaView className="flex-1 px-5">
      <TopBar />
      <ScrollView className="flex-1 mb-15" showsVerticalScrollIndicator={false}>
        <View className="flex-1 space-y-5">
          <View className="my-3">
            <Text className="text-[36px] font-semibold text-[#111111]">
              Mr.Fred Fafa,
            </Text>
            <View className="w-11/12">
              <Text className="text-2xl text-[#111111]">
                Protect Your Account
              </Text>
            </View>
          </View>

          <CustomInput ph="Password" />
          <CustomInput ph="Confirm Password" />

          <CustomButton lab="Set up Account" bg="#F47D7B" textColor="#fff" />
        </View>

        <View className="space-y-5">
          <Pressable className="flex-row justify-center bg-[#fff] py-4 items-center space-x-3 rounded-[15px]">
            <Image
              source={google}
              className="w-[30px] h-[30px]"
              resizeMode="contain"
            />
            <Text className="text-lg">Sign in with google</Text>
          </Pressable>

          <Pressable className="flex-row justify-center bg-[#111111] py-4 items-center space-x-3 rounded-[15px]">
            <FontAwesome name="apple" size={24} color="#fff" />
            <Text className="text-lg text-[#fff]">Sign in with apple</Text>
          </Pressable>

          <View className="flex-row items-center justify-center mb-4">
            <Text>Don’t have an Account? </Text>
            <Pressable onPress={() => router.push("/(auth)/signup/")}>
              <Text className="text-[#F47D7B]">Sign Up here</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Password;
