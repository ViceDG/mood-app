import React from "react";
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
import themes from "../../data/themes.json";
import sceneSelectStyles from "./SceneSelect.styles";
import { sceneObj } from "../../data/images";
import { useThemeStore } from "../../store";
import { Entypo } from "@expo/vector-icons";

const SceneSelect = ({ navigation }) => {
  const setTheme = useThemeStore((state) => state.setTheme);

  const handleClick = (data) => {
    setTheme(data);
    navigation.navigate("SceneView");
  };

  return (
    <SafeAreaView style={sceneSelectStyles.selectContainer}>
      <ScrollView>
        <ImageBackground
          source={require("../../assets/public/images/sceneSelectBG.png")}
          style={sceneSelectStyles.bgImage}
          resizeMode="cover"
        >
          <View style={sceneSelectStyles.overlay} />
          <View style={sceneSelectStyles.header}>
            <TouchableOpacity
              style={sceneSelectStyles.infoButton}
              onPress={() => navigation.navigate("Home")}
            >
              <Entypo name="home" size={25} color="white" />
            </TouchableOpacity>
            <Text
              style={{
                ...sceneSelectStyles.headerText,
                fontFamily: "Baloo-Bhaijaan2",
              }}
            >
              SELECT A SCENE
            </Text>
            <TouchableOpacity style={sceneSelectStyles.infoButton}>
              <Entypo name="info-with-circle" size={25} color="white" />
            </TouchableOpacity>
          </View>
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
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SceneSelect;
