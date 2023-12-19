// MyStack.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import SceneSelect from "../screens/SceneSelect/SceneSelect";
import SceneView from "../screens/SceneView/SceneView";
import { useState } from "react";

const Stack = createStackNavigator();

const MyStack = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="SceneSelect" component={SceneSelect} />
      <Stack.Screen name="SceneView" component={SceneView} />
    </Stack.Navigator>
  );
};

export default MyStack;
