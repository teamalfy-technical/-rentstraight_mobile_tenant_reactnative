import {
  View,
  Text,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
  Pressable,
  Image,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TopBar from "@/components/Topbar";
import * as ImagePicker from "expo-image-picker";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import { Select } from "native-base";
// @ts-ignore
import google from "@/assets/images/google-icon.png";

const CardUpload = () => {
  const [image, setImage] = useState<String | null>(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView
      className="flex-1 px-5"
      // style={{ backgroundColor: Colors.dark.background }}
    >
      <TopBar />
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        {/* <Formik
         initialValues={initialValues}
         onSubmit={handleOtp}
         validateOnBlur
       >
         {({ handleChange, handleSubmit }) => (
           <> */}
        <ScrollView
          className="flex-1 mb-15"
          showsVerticalScrollIndicator={false}
        >
          <View className="flex-1 space-y-5">
            <View className="my-3">
              <Text className="text-[36px] font-bold text-[#111111]">
                Mr.Fred Fafa,
              </Text>
              <View className="w-11/12">
                <Text className="text-2xl text-[#111111]">
                  Prove your existence
                </Text>
              </View>
            </View>

            <View>
              <Select
                placeholder="Choose Card"
                borderColor={"#3F3F3F24"}
                borderRadius={"10px"}
                className="py-5 px-3"
              >
                <Select.Item label="Select your card type" value="" key="0" />
                <Select.Item label="Visa" value="Visa" key="1" />
                <Select.Item label="MasterCard" value="MasterCard" key="2" />
                <Select.Item
                  label="American Express"
                  value="American Express"
                  key="3"
                />
                <Select.Item label="Discover" value="Discover" key="4" />
              </Select>
            </View>

            <View className="h-[200px] rounded-[15px] w-full items-center justify-center border-2 border-dashed border-[#3F3F3F24] mb-8 space-y-3">
              <MaterialCommunityIcons
                name="camera-plus"
                size={90}
                color="black"
                role="button"
                onPress={pickImage}
              />
              <Text className="underline">
                Tap to upload your preferred profile picture
              </Text>
            </View>

            <CustomButton
              bg="#F47D7B"
              textColor="#fff"
              lab="Continue"
              onPress={() => router.push("/(auth)/signup/password")}
            />
          </View>
        </ScrollView>

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
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CardUpload;
