import React from "react";
import { useEffect, useState, useRef } from "react";
import { View, ImageBackground, TouchableOpacity } from "react-native";
import { Audio, Video, ResizeMode } from "expo-av";
import { useThemeStore } from "../../store";
import { videoObj } from "../../data/videos";
import { sceneObj } from "../../data/images";
import Stopwatch from "../../components/Stopwatch/Stopwatch";
import { MaterialIcons } from "@expo/vector-icons";

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
  const [displayTimer, setDisplayTimer] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

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
    await sound.setIsLoopingAsync(true);
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
      <Stopwatch displayTimer={displayTimer} animationKey={animationKey} />
      <Video
        ref={video}
        style={sceneViewStyles.video}
        source={videoObj[theme]}
        resizeMode={ResizeMode.COVER}
        isMuted
        shouldPlay={true}
        isLooping
      />
      <View style={sceneViewStyles.swIconContainer}>
        <TouchableOpacity
          onPress={() => {
            setDisplayTimer(!displayTimer);
            setAnimationKey((prevKey) => prevKey + 1);
          }}
        >
          {!displayTimer ? (
            <MaterialIcons
              style={{ textAlign: "center" }}
              name="timer"
              size={50}
              color="white"
            />
          ) : (
            <MaterialIcons
              style={{ textAlign: "center" }}
              name="timer-off"
              size={50}
              color="white"
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SceneView;
