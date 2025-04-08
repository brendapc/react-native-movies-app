import React from "react";
import "./globals.css";
import { StatusBar } from "react-native";
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <>
      <StatusBar hidden={true} />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="movies/[id]" options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

export default RootLayout;
