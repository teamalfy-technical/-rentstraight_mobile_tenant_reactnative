import TopBar from "@/components/Topbar";
import { ImageBackground, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// @ts-ignore
import bg from "@/assets/images/bg1.png";
import { router } from "expo-router";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-[#8FBFE0]">
      <TopBar />
      <ImageBackground
        source={bg}
        className="flex-1 w-full h-full bg-left-bottom"
        resizeMode="cover"
      >
        <View className="flex-1" />
        <View className="flex-1 bg-[#FFFFFF98]">
        <View className="flex-1 px-5 space-y-5">
          <Text className="text-[64px] font-montAlt text-[#412234] pt-4">Elevate Your Experience</Text>
          <Text className="text-xl text-[#111111]">Where Convenience Meets Comfort.</Text>
        </View>
        <View className="px-5">
          <Pressable className="rounded-[30px] bg-[#F47D7B] py-4 items-center bottom-3" onPress={()=> router.replace('/(auth)') }>
            <Text className="text-[#fff] text-lg">Get Started</Text>
          </Pressable>
          </View>
          </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
