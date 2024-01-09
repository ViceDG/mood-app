// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./utils/MyStack";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import "react-native-gesture-handler";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" translucent backgroundColor="transparent" />
      <MyStack />
    </NavigationContainer>
  );
}
