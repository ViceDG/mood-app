import React from "react";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Audio } from "expo-av";
import themes from "../../data/themes.json";
import customSceneStyles from "./CustomScene.styles";
import Header from "../../components/Header/Header";
import { sceneObj } from "../../data/images";
import { useThemeStore } from "../../store";
import { Entypo } from "@expo/vector-icons";
import {
  desertA,
  fieldA,
  mountainsA,
  snowA,
  swampA,
  spaceA,
} from "../../data/audio";

const CustomScene = ({ navigation }) => {
  const setTheme = useThemeStore((state) => state.setTheme);
  const [sound, setSound] = useState();
  const [audioName, setAudioName] = useState("");

  const audioObj = {
    desert: desertA,
    field: fieldA,
    mountains: mountainsA,
    snow: snowA,
    swamp: swampA,
    space: spaceA,
  };

  const playSound = async (theme) => {
    await Audio.setAudioModeAsync({
      playsInSilentModeIOS: true,
    });
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(audioObj[theme]);
    setSound(sound);
    setAudioName(theme);
    console.log("Playing Sound");
    await sound.setIsLoopingAsync(true);
    await sound.playAsync();
  };

  const stopSound = async () => {
    sound.unloadAsync();
    setAudioName("");
  };

  useEffect(() => {
    console.log(sound);
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const handleClick = (data) => {
    stopSound();
    setTheme(data);
    navigation.navigate("SceneView");
  };

  return (
    <SafeAreaView style={customSceneStyles.selectContainer}>
      <ScrollView style={{ backgroundColor: "#F3E6C5" }}>
        <ImageBackground
          source={require("../../assets/public/images/customSceneBG.png")}
          style={customSceneStyles.bgImage}
          resizeMode="cover"
        >
          <View style={customSceneStyles.overlay} />
          <Header title="CUSTOMIZE A SCENE" navigation={navigation} />

        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CustomScene;
