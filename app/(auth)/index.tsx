import { View, Text, ImageBackground, Pressable, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TopBar from "@/components/Topbar";
import { CustomInput } from "@/components/CustomInput";
// @ts-ignore
import bg from "@/assets/images/bg2.png";
// @ts-ignore
import google from "@/assets/images/google-icon.png";
import { FontAwesome } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { router } from "expo-router";
import { useAuth } from "@/context/AuthContext";
import { Formik, FormikValues } from "formik";
import BottomModal from "@/components/BottomModal";

const SignIn = () => {
  const { login, loading } = useAuth();

  const handleLogin = async (values: FormikValues) => {
    await login(values.email, values.password);
  }
  return (
    <SafeAreaView className="flex-1 bg-[#41414138]">
      <BlurView intensity={70} tint="light" className="flex-1 ">
        <ImageBackground
          source={bg}
          className="flex-1 w-full absolute z-0 right-[-30%] top-14 h-[90%] bg-right"
          resizeMode="cover"
        />
        <View className="flex-1 bg-opacity-30 px-5">
          <TopBar />
          <View className="flex-1">
            <View className="flex-1">
              <View className="">
                <Text className="text-[64px] font-montAlt">Elevate Your</Text>
                <Text className="text-[#F47D7B] text-[64px] font-montAlt">Experience</Text>
              </View>

              <Formik initialValues={{email: '', password: ''}} onSubmit={handleLogin}>
                {({ handleChange, handleSubmit, values, handleBlur }) => (
              <View className="space-y-5">
                <CustomInput ph="Username" textColor="#fff" bg="#3F3F3F24" change={handleChange('email')} value={values.email} blur={() => handleBlur('email')}/>
                <CustomInput ph="Password" textColor="#fff" bg="#3F3F3F24" change={handleChange('password')} value={values.password} blur={() => handleBlur('password')} />

                <Pressable
                  className="rounded-[15px] bg-[#F47D7B] py-4 items-center mb-5"
                  onPress={() => handleSubmit()}
                >
                  <Text className="text-[#fff] text-lg font-montAlt">Sign In</Text>
                </Pressable>
              </View>
            )}
              </Formik>

              <View className="flex-row items-center justify-center">
                <Text className=" font-montAlt text-sm">Forgot password? </Text>
                <Pressable>
                  <Text className="text-[#F47D7B] font-montAlt">Click here to recover</Text>
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
                  <Text className="text-lg font-montAlt">Sign in with google</Text>
                </Pressable>

                <Pressable className="flex-row justify-center bg-[#111111] py-4 items-center space-x-3 rounded-[15px]">
                  <FontAwesome name="apple" size={24} color="#fff" />
                  <Text className="text-lg text-[#fff] font-montAlt">
                    Sign in with apple
                  </Text>
                </Pressable>

                <View className="flex-row items-center justify-center mb-4">
                  <Text>Don’t have an Account? </Text>
                  <Pressable onPress={() => router.push('/(auth)/signup/')}>
                    <Text className="text-[#F47D7B] font-montAlt">Sign Up here</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        </View>
      </BlurView>
      {loading && <BottomModal text={'is logging you in, please wait...'} loading = {loading}/>}
    </SafeAreaView>
  );
};

export default SignIn;
