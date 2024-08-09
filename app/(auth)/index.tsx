import { View, Text, ImageBackground, Pressable, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TopBar from "@/components/Topbar";
import { CustomInput } from "@/components/CustomInput";
import bg from "@/assets/images/bg2.png";
import google from "@/assets/images/google-icon.png";
import { FontAwesome } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { router } from "expo-router";

const SignIn = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#41414138]">
      <BlurView intensity={70} tint="light" className="flex-1 ">
        <ImageBackground
          source={bg}
          className="flex-1 w-full absolute z-0 right-[-30%] top-14 h-[90%] bg-right"
          resizeMode="cover"
        />
        <View className="flex-1 bg-opacity-30">
          <TopBar />
          <View className="flex-1 px-5">
            <View className="flex-1">
              <View className="">
                <Text className="text-[64px]">Elevate Your Experience</Text>
                <Text className="text-[#F47D7B] text-[64px]">Experience</Text>
              </View>

              <View className="space-y-5">
                <CustomInput ph="Username" textColor="#fff" bg="#3F3F3F24" />
                <CustomInput ph="Password" textColor="#fff" bg="#3F3F3F24" />

                <Pressable
                  className="rounded-[15px] bg-[#F47D7B] py-4 items-center mb-5"
                  onPress={() => {}}
                >
                  <Text className="text-[#fff] text-lg">Sign In</Text>
                </Pressable>
              </View>

              <View className="flex-row items-center justify-center">
                <Text>Forgot password? </Text>
                <Pressable>
                  <Text className="text-[#F47D7B]">Click here to recover</Text>
                </Pressable>
              </View>
            </View>

            <View className="space-y-3">
              <View className="flex-row items-center justify-between">
                <View className="border-2 border-[#3F3F3F24] w-[40%]" />
                <Text className="text-[#F47D7B]">Or</Text>
                <View className="border-2 border-[#3F3F3F24] w-[40%]" />
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
                  <Text className="text-lg text-[#fff]">
                    Sign in with apple
                  </Text>
                </Pressable>

                <View className="flex-row items-center justify-center mb-4">
                  <Text>Don’t have an Account? </Text>
                  <Pressable onPress={() => router.push('/(auth)/signup/')}>
                    <Text className="text-[#F47D7B]">Sign Up here</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        </View>
      </BlurView>
    </SafeAreaView>
  );
};

export default SignIn;
