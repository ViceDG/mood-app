// Page One
import React from "react";
import { View, Text, Button } from "react-native";

const SceneSelect = ({ navigation }) => {
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

export default SceneSelect;
