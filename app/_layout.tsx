import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { NativeBaseProvider, Box } from "native-base";

export default function RootLayout() {
  const [loaded] = useFonts({
    montAlt: require("@/assets/fonts/MontserratAlternates-Regular.ttf"),
  });
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return (
    <NativeBaseProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
      </Stack>
    </NativeBaseProvider>
  );
}
