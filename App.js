// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./utils/MyStack";
import 'react-native-reanimated'
import 'react-native-gesture-handler'

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
