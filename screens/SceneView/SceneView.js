import React from "react";
import { View, Text, Button, ImageBackground } from "react-native";
import { useThemeStore } from "../../store";
import {
  desert,
  field,
  mountains,
  snow,
  swamp,
  space,
} from "../../data/images";
import sceneViewStyles from "./SceneView.styles";

const SceneView = ({ navigation }) => {
  const { theme } = useThemeStore();
  const sceneObj = {
    desert: desert,
    field: field,
    mountains: mountains,
    snow: snow,
    swamp: swamp,
    space: space,
  };

  return (
    <View style={sceneViewStyles.container}>
      <ImageBackground
        source={sceneObj[theme]}
        resizeMode="cover"
        style={sceneViewStyles.image}
      >
        <Text style={sceneViewStyles.text}>Particles</Text>
      </ImageBackground>
      {/* <Button
        title="Go To Home Screen"
        onPress={() => navigation.navigate("Home")}
      /> */}
    </View>
  );
};

export default SceneView;
