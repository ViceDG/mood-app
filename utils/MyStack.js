// MyStack.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import SceneSelect from "../screens/SceneSelect/SceneSelect";
import SceneView from "../screens/SceneView/SceneView";
<<<<<<< HEAD
import InfoScreen from "../screens/Info/Info";
=======
import MoreInfo from "../screens/MoreInfo/MoreInfo";
>>>>>>> e72cd6c0b73a98c9c7e15a7d4c12082bad4a1d1a

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
      <Stack.Screen name="MoreInfo" component={MoreInfo} />
      <Stack.Screen name="SceneView" component={SceneView} />
      <Stack.Screen name="InfoScreen" component={InfoScreen}/>
    </Stack.Navigator>
  );
};

export default MyStack;
