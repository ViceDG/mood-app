import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import themes from "../../data/themes.json";
import sceneSelectStyles from "./SceneSelect.styles";
import { sceneObj } from "../../data/images";
import { useThemeStore } from "../../store";
import { A } from "@expo/html-elements";

const SceneSelect = ({ navigation }) => {
  const setTheme = useThemeStore((state) => state.setTheme);

  const handleClick = (data) => {
    setTheme(data);
    navigation.navigate("SceneView");
  };

  return (
    <View style={sceneSelectStyles.selectContainer}>
      <ImageBackground
        source={require("../../assets/public/images/sceneSelectBG.png")}
        style={sceneSelectStyles.bgImage}
        resizeMode="cover"
      >
        <Text
          style={{
            ...sceneSelectStyles.headerText,
            fontFamily: "Baloo-Bhaijaan2",
          }}
        >
          SELECT A SCENE
        </Text>
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
                <A style={sceneSelectStyles.selectCredit} href={item.creditLink}>
                    Credit: {item.credit}
                </A>
              </View>
            </TouchableOpacity>
          )}
        />
        <TouchableOpacity
          style={sceneSelectStyles.infoButton}
          title="Back"
          onPress={() => navigation.navigate("Home")}
        >
          <View>
            <Text style={sceneSelectStyles.infoText}>i</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default SceneSelect;
