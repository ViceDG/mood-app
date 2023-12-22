import React from "react";
import { useEffect, useState, useRef } from "react";
import { View, Text, Button, ImageBackground } from "react-native";
import { Audio, Video, ResizeMode } from "expo-av";
import { useThemeStore } from "../../store";
import { useSoundStore } from "../../store";
import { videoObj } from "../../data/videos";
import { sceneObj } from "../../data/images";
import Stopwatch from "../../utils/Stopwatch/Stopwatch";
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
  const [sound, setSound] = useState();
  const video = useRef(null);
  const [status, setStatus] = useState({});
  // const setSound = useSoundStore((state) => state.setSound);
  // const { sound } = useSoundStore();

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
    await sound.setIsLoopingAsync(true)
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
      <Stopwatch/>
      <Video
        ref={video}
        style={sceneViewStyles.video}
        source={videoObj[theme]}
        resizeMode={ResizeMode.COVER}
        isMuted
        shouldPlay={true}
        isLooping
      />
      {/* <ImageBackground
        source={sceneObj[theme]}
        resizeMode="cover"
        style={sceneViewStyles.image}
      >
        <Text style={sceneViewStyles.text}>Particles</Text>
      </ImageBackground> */}
    </View>
  );
};

export default SceneView;
