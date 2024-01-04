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
import sceneSelectStyles from "./SceneSelect.styles";
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

const SceneSelect = ({ navigation }) => {
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
    <SafeAreaView style={sceneSelectStyles.selectContainer}>
      <ScrollView style={{ backgroundColor: "#F3E6C5" }}>
        <ImageBackground
          source={require("../../assets/public/images/sceneSelectBG.png")}
          style={sceneSelectStyles.bgImage}
          resizeMode="cover"
        >
          <View style={sceneSelectStyles.overlay} />
          <Header title="SELECT A SCENE" navigation={navigation} />
          <FlatList
            data={themes}
            contentContainerStyle={sceneSelectStyles.selectList}
            numColumns={1}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                key={index}
                style={sceneSelectStyles.selectItem}
                onPress={() => handleClick(item.name)}
              >
                <Image
                  source={sceneObj[item.name]}
                  style={sceneSelectStyles.selectImage}
                />
                <View style={sceneSelectStyles.itemContainer}>
                  <View style={sceneSelectStyles.itemTop}>
                    <Text style={sceneSelectStyles.itemTitle}>
                      {item.name.toUpperCase()}
                    </Text>
                    {audioName !== item.name ? (
                      <TouchableOpacity onPress={() => playSound(item.name)}>
                        <Entypo
                          name="controller-play"
                          size={25}
                          color="#5f8971"
                        />
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity onPress={() => stopSound()}>
                        <Entypo
                          name="controller-stop"
                          size={25}
                          color="#81272e"
                        />
                      </TouchableOpacity>
                    )}
                  </View>
                  <Text style={sceneSelectStyles.selectDescription}>
                    {item.description}
                  </Text>
                  <Text style={sceneSelectStyles.selectCredit}>
                    Credit: {item.credit}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SceneSelect;
