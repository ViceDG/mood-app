// MyStack.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import SceneSelect from "../screens/SceneSelect/SceneSelect";
import SceneView from "../screens/SceneView/SceneView";
import { useState } from "react";
import { StyleSheet } from "react-native";

const Stack = createStackNavigator();

const stackStyles = StyleSheet.create({
  container: {
    display: "none",
  },
});

const MyStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          display: 'none',
          height: 0
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="SceneSelect" component={SceneSelect} />
      <Stack.Screen name="SceneView" component={SceneView} />
    </Stack.Navigator>
  );
};

export default MyStack;
