import { View, Text, Pressable, Image, ScrollView } from "react-native";
import React from "react";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import CustomButton from "@/components/CustomButton";
import { CustomInput } from "@/components/CustomInput";
import PhoneInput from "react-native-phone-number-input";
//@ts-ignore
import google from "@/assets/images/google-icon.png";

const UserDetails = ({ change, errors, blur, values, next }: any) => {
  console.log(values, "values");
  const disable = !values?.full_name || !values?.email || !values?.username || !values?.phone_number
  return (
    <SafeAreaView className="flex-1 px-5">
      <View className="mb-6">
        <Text className="text-[64px] font-montAlt">Welcome</Text>
        <Text className="text-2xl font-montAlt">Lets get you started</Text>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="flex-1">
          <CustomInput
            ph="Full Name"
            value={values?.full_name}
            change={change("full_name")}
            blur={blur("full_name")}
          />
          {errors?.full_name && (
            <Text className="text-red-500">{errors?.full_name}</Text>
          )}
          <CustomInput
            ph="Email"
            change={change("email")}
            blur={blur("email")}
            value={values?.email}
          />
          {errors?.email && (
            <Text className="text-red-500">{errors?.email}</Text>
          )}
          <CustomInput
            ph="Username"
            change={change("username")}
            blur={blur("username")}
            value={values?.username}
          />
          {errors?.username && (
            <Text className="text-red-500">{errors?.username}</Text>
          )}
          <PhoneInput
            placeholder="Enter phone number"
            defaultValue={values?.phone_number}
            defaultCode="GH"
            layout="first"
            onChangeFormattedText={change("phone_number")}
            autoFocus
            containerStyle={{
              width: "100%",
              borderWidth: 1,
              borderColor: "#3F3F3F24",
              borderRadius: 15,
              overflow: "hidden",
              marginBottom: 15,
            }}
          />

          <View className="my-4">
            <CustomButton
              lab="Continue"
              bg="#F47D7B"
              textColor="#fff"
              onPress={() => next("password")}
              disabled={disable}
            />
          </View>
        </View>
      </ScrollView>

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
            <Text className="text-lg text-[#fff]">Sign in with apple</Text>
          </Pressable>

          <View className="flex-row items-center justify-center mb-4">
            <Text>Don’t have an Account? </Text>
            <Pressable onPress={() => router.push("/(auth)")}>
              <Text className="text-[#F47D7B]">Sign In here</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UserDetails;
