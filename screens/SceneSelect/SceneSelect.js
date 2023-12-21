import React from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import themes from "../../data/themes.json";
import sceneSelectStyles from "./SceneSelect.styles";
import { sceneObj } from "../../data/images";
import { useThemeStore } from "../../store";
import { ImageBackground } from "react-native-web";
import { useFonts } from "expo-font";
import backgroundImage from "../../assets/public/images/sceneSelectBG.png";

const SceneSelect = ({ navigation }) => {
  const setTheme = useThemeStore((state) => state.setTheme);

  const handleClick = (data) => {
    setTheme(data);
    navigation.navigate("SceneView");
  };




  return (
    <View style={sceneSelectStyles.selectContainer}>
      <ImageBackground
        source={backgroundImage}
        style={sceneSelectStyles.bgImage}
        resizeMode="cover"
      >
        <Text style={{...sceneSelectStyles.headerText, fontFamily: "Baloo-Bhaijaan2" }}>SELECT A SCENE</Text>
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
                <Text style={sceneSelectStyles.selectButton}>
                  {item.name.toUpperCase()}
                </Text>
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
        <Button title="Back" onPress={() => navigation.navigate("Home")} />
      </ImageBackground>
    </View>
  );
};

export default SceneSelect;
