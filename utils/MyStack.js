// MyStack.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import SceneSelect from "../screens/SceneSelect/SceneSelect";

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="scene-select" component={SceneSelect} />
    </Stack.Navigator>
  );
};

export default MyStack;
