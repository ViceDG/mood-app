// MyStack.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import SceneSelect from "../screens/SceneSelect/SceneSelect";
import SceneView from "../screens/SceneView/SceneView";

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          height: 0,
        },
        headerTitle: null,
        headerTransparent: true,
        headerLeft: null,
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
