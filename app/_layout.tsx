import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import "../global.css";


export default function RootLayout() {


  return (
    <>
      <StatusBar barStyle="light-content" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: '#1a1a2e' },
          headerTintColor: '#FF6B6B',
          headerTitleStyle: { fontWeight: 'bold' },
          animation: 'slide_from_right'
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="translation/[lang]" options={{ title: 'Traduction', presentation: 'modal' }} />
        <Stack.Screen name="+not-found" options={{ title: 'Oops' }} />
      </Stack>
    </>
  );
}
