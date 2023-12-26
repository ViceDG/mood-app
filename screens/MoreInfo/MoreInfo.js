import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import moreInfoStyles from "./MoreInfo.styles";
import { Entypo } from "@expo/vector-icons";

const MoreInfo = ({ navigation }) => {
  return (
    <SafeAreaView style={moreInfoStyles.selectContainer}>
      <ImageBackground
        source={require("../../assets/public/images/sceneSelectBG.png")}
        style={moreInfoStyles.bgImage}
        resizeMode="cover"
      >
        <View style={moreInfoStyles.overlay} />
        <View style={moreInfoStyles.header}>
          <TouchableOpacity
            style={moreInfoStyles.infoButton}
            onPress={() => navigation.navigate("Home")}
          >
            <Entypo name="home" size={25} color="white" />
          </TouchableOpacity>
          <Text
            style={{
              ...moreInfoStyles.headerText,
              fontFamily: "Baloo-Bhaijaan2",
            }}
          >
            ABOUT ZEN PORTAL
          </Text>
          <TouchableOpacity
            style={moreInfoStyles.infoButton}
            onPress={() => navigation.navigate("SceneSelect")}
          >
            <Entypo name="info-with-circle" size={25} color="white" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default MoreInfo;
