import React from "react";
import { useEffect } from "react";
import { View, Text, Button, ImageBackground } from "react-native";
import { useThemeStore } from "../../store";
import { useSoundStore } from "../../store";
import { Audio } from "expo-av";
import {
  desert,
  field,
  mountains,
  snow,
  swamp,
  space,
} from "../../data/images";
import {
  desertA,
  fieldA,
  mountainsA,
  snowA,
  swampA,
  spaceA,
} from "../../data/audio";
import sceneViewStyles from "./SceneView.styles";

const SceneView = ({ navigation }) => {
  const { theme } = useThemeStore();
  const setSound = useSoundStore((state) => state.setSound);
  const { sound } = useSoundStore();

  const sceneObj = {
    desert: desert,
    field: field,
    mountains: mountains,
    snow: snow,
    space: space,
    swamp: swamp,
  };

  const audioObj = {
    desert: desertA,
    field: fieldA,
    mountains: mountainsA,
    snow: snowA,
    swamp: swampA,
    space: spaceA,
  };

  const playSound = async () => {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(audioObj[theme]);
    setSound(sound);
    console.log("Playing Sound");
    await sound.playAsync();
  };

  useEffect(() => {
    playSound();
  }, []);

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={sceneViewStyles.container}>
      <ImageBackground
        source={sceneObj[theme]}
        resizeMode="cover"
        style={sceneViewStyles.image}
      >
        <Text style={sceneViewStyles.text}>Particles</Text>
      </ImageBackground>
    </View>
  );
};

export default SceneView;
