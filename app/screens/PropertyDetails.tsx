import {
  View,
  Text,
  Image,
  ScrollView,
  ImageBackground,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TopBack from "@/components/TopBack";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { Link, router, useLocalSearchParams } from "expo-router";
import GoogleStaticMap from "@dazik/react-native-static-map";
import CustomButton from "@/components/CustomButton";
import MeetupDate from "@/components/MeetupDate";

const PropertyDetails = () => {
  const [show, setShow] = useState(false);
  const item = useLocalSearchParams();
  console.log(item, "item");
  return (
    <SafeAreaView className="flex-1 px-5">
      <TopBack />

      <ScrollView className="flex-1 my-6" showsVerticalScrollIndicator={false}>
        <View
          className="rounded-[20px] mr-4 overflow-hidden my-3"
          style={{
            height: hp(40),
            width: wp(90),
          }}
        >
          <ImageBackground
            className="flex-1 justify-between"
            resizeMode="cover"
            source={require("@/assets/images/bg3.jpeg")}
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
                  <MaterialCommunityIcons
                    name="shower"
                    size={24}
                    color="white"
                  />
                  <Text className="text-white">5</Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>

        <View className="bg-[#fff] shadow-sm rounded-2xl">
          <View className="p-4 space-y-2">
            <View className="flex-row w-full justify-between items-center">
              <Text className="font-semibold text-2xl text-black font-montAlt">
                House Name
              </Text>
              <Ionicons
                name="call"
                size={24}
                color="#F47D7B"
                className="shadow-sm p4"
                style={{
                  backgroundColor: "#fff",
                  padding: 5,
                  borderRadius: 5,
                  elevation: 5,
                }}
              />
            </View>

            <Text className="text-lg text-black font-montAlt">
              Ritz, Adenta | 3.5Km away
            </Text>

            <Text className="text-[#111111]">
              This is a stunning house with not just a stunning view, but one of
              the best, carefully selected neighbours
            </Text>

            <Text className="text-[#F47D7B]">Landlord</Text>

            <View className="flex-row justify-between items-center">
              <Image
                source={require("@/assets/images/user.jpeg")}
                className="w-[60px] h-[60px] rounded-full"
                resizeMode="contain"
              />
              <Link href={"/"}>
                <Text className="font-montAlt text-sm underline text-[#F47D7B]">
                  Download Policy
                </Text>
              </Link>
            </View>
          </View>
        </View>

        <View className="bg-[#fff] shadow-sm rounded-2xl my-4 justify-between flex-row p-4">
          <View className="p-4">
            <GoogleStaticMap
              center={{
                latitude: 13.061,
                longitude: 54.177,
              }}
              style={{ width: 200, height: 120, borderRadius: 20 }}
              zoom={10}
              size={{
                width: 300,
                height: 100,
              }}
              apiKey="AIzaSyAA6rd0ptwb5qT2DjEaN3cZdt2iE23n28g"
            />
          </View>

          <Pressable
            onPress={() => setShow(!show)}
            className="rounded-2xl items-center shadow-sm shadow-black bg-white justify-center p-4"
          >
            <FontAwesome6 name="handshake-angle" size={40} color="#F47D7B" />
            <Text className="font-montAlt text-sm">Book a meetup</Text>
          </Pressable>

        </View>
          {show && <MeetupDate show={show} setShow={setShow}/>}

        <View className="flex-row justify-between items-center">
          <View>
            <Text className="font-bold text-[30px]">Ghc300</Text>
            <Text>Per Month</Text>
          </View>

          <View className="w-[50%]">
            <CustomButton lab="Apply" textColor="#fff" bg="#F47D7B" onPress={() => router.push('/screens/DocumentUpload')}/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PropertyDetails;
