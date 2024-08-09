import {
  View,
  Text,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TopBar from "@/components/Topbar";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";

const ProfileUpload = () => {
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
                  Verify your account
                </Text>
              </View>
            </View>

          <View className="h-[350px] rounded-[15px] w-full items-center justify-center border-2 border-dashed border-[#3F3F3F24] mb-8 space-y-3">
            <MaterialCommunityIcons
              name="camera-plus"
              size={90}
              color="black"
              role="button"
              onPress={pickImage}
            />
            <Text className="underline">Tap to upload your preferred profile picture</Text>
          </View>

          <CustomButton bg="#F47D7B" textColor="#fff" lab="Continue" onPress={() => router.push('/(auth)/signup/cardUpload')}/>

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ProfileUpload;
