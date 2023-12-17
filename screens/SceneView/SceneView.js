import React from "react";
import { View, Text, Button } from "react-native";

const SceneView = ({ navigation }) => {
  return (
    <View>
      <Text>Page One</Text>
      <Button
        title="Go To Home Screen"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

export default SceneView;