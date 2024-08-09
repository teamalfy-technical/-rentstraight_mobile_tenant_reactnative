import { View, Text, KeyboardAvoidingView, Platform, ScrollView, Pressable, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopBar from '@/components/Topbar'
import OtpInput from 'react-native-input-otp'
import CustomButton from '@/components/CustomButton'
import { FontAwesome } from '@expo/vector-icons'
import { router } from 'expo-router'
// @ts-ignore
import google from '@/assets/images/google-icon.png'

const otp = () => {
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
              <View className="flex-1">
                <View className="my-3">
                  <Text className="text-[36px] font-semibold text-[#111111]">
                  Mr.Fred Fafa,
                  </Text>
                  <View className="w-11/12">
                    <Text className="text-2xl text-[#111111]">
                    Verify your account
                    </Text>
                  </View>
                </View>
                <View className="flex-1 mt-10">
                  <Text className="text-[12px] text-[#F47D7B] my-2">
                  Change Mobile Number
                  </Text>
                  <OtpInput
                    // onChange={handleChange("otp")}
                    numInputs={4}
                    inputStyle={{
                      borderColor: "#FFFFFF5E",
                      borderWidth: 2,
                      borderRadius: 15,
                      width: 80,
                      height: 80,
                      color: "#FFFFFF",
                      fontSize: 20,
                      fontWeight: "bold",
                    }}
                    autoFocus
                    keyboardType='email-address'
                  />
                  <Pressable 
                //   onPress={resendEmail}
                  >
                    <Text className="text-lg text-[#111111] my-2">
                      Resend email verification
                    </Text>
                  </Pressable>
                </View>
                
                <CustomButton bg='#F47D7B' lab='Verify' textColor='#fff' onPress={() => router.push('/(auth)/signup/profileUpload')}/>
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
          {/* </>
        )}
      </Formik> */}
    </KeyboardAvoidingView>
  </SafeAreaView>
  )
}

export default otp