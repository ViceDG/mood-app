import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  SafeAreaView,
} from "react-native";
import InfoStyles from "./Info.styles";
import Header from "../../components/Header/Header";

const InfoScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={InfoStyles.selectContainer}>
      <ScrollView style={{ backgroundColor: "#F3E6C5" }}>
        <ImageBackground
          source={require("../../assets/public/images/sceneSelectBG.png")}
          style={InfoStyles.bgImage}
          resizeMode="cover"
        >
          <View style={InfoStyles.overlay} />
          <Header title="ABOUT US" goto="SceneSelect" navigation={navigation} />
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InfoScreen;
