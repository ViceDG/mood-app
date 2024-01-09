// MyStack.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import SceneSelect from "../screens/SceneSelect/SceneSelect";
import SceneView from "../screens/SceneView/SceneView";
import InfoScreen from "../screens/Info/Info";
import CustomScene from "../screens/CustomScene/CustomScene";

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          height: 0,
        },
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="SceneSelect" component={SceneSelect} />
      <Stack.Screen name="SceneView" component={SceneView} />
      <Stack.Screen name="InfoScreen" component={InfoScreen}/>
      <Stack.Screen name="CustomScene" component={CustomScene}/>
    </Stack.Navigator>
  );
};

export default MyStack;
