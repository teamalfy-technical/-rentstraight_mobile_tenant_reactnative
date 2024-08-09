import { View, Text, Pressable, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomInput } from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import PhoneInput from "react-native-phone-number-input";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import google from '@/assets/images/google-icon.png'

const Welcome = () => {
  const [value, setValue] = useState();
  return (
    <SafeAreaView className="flex-1 px-5">
      <View className="mb-6">
        <Text className="text-[64px]">Welcome</Text>
        <Text className="text-2xl">Lets get you started</Text>
      </View>

      <View className="flex-1">
        <CustomInput ph="Full Name" />
        <CustomInput ph="Email" />
        <CustomInput ph="Username" />
        <PhoneInput
          placeholder="Enter phone number"
          defaultValue={value}
          defaultCode="GH"
          layout='first'
          onChangeText={(e) => setValue(e)}
          autoFocus
          containerStyle={{ width: '100%', borderWidth: 1, borderColor: '#3F3F3F24', borderRadius: 15, overflow: 'hidden', marginBottom: 15 }}
        />

      <View className="my-4">
        <CustomButton lab="Continue" bg="#F47D7B" textColor="#fff" onPress={() => router.push('/(auth)/signup/otp')}/>
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
                  <Pressable onPress={() => router.push('/(auth)')}>
                    <Text className="text-[#F47D7B]">Sign In here</Text>
                  </Pressable>
                </View>
              </View>
            </View>
    </SafeAreaView>
  );
};

export default Welcome;
