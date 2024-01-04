import React from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  Linking,
  ImageBackground,
  ScrollView,
  SafeAreaView,
} from "react-native";
import InfoStyles from "./Info.styles";
import Header from "../../components/Header/Header";

const InfoScreen = ({ navigation }) => {
  const vdgLink = () => {
    Linking.openURL("https://vicedevgroup.netlify.app/");
  };

  const jazzfishLink = () => {
    Linking.openURL("https://soundcloud.com/jazzfish");
  };

  return (
    <SafeAreaView style={InfoStyles.selectContainer}>
      <ScrollView style={{ backgroundColor: "rgba(243, 220, 170, .5)" }}>
        <ImageBackground
          source={require("../../assets/public/images/sceneSelectBG.png")}
          style={InfoStyles.bgImage}
          resizeMode="cover"
        >
          <View style={InfoStyles.overlay} />
          <Header title="ABOUT US" goto="SceneSelect" navigation={navigation} />
          <View style={InfoStyles.aboutContainer}>
          <Pressable onPress={vdgLink}>
            <Image
              source={require("../../assets/public/images/vdgLogo.png")}
              style={InfoStyles.vdgLogo}
              resizeMode="contain"
            ></Image>
          </Pressable>
          <Text style={InfoStyles.vdgBlurb}>
            We are committed to creating modern tech solutions for the modern
            entrepreneur! We create fast, efficient, and reliable products that
            will support the growth of any small business.{" "}
          </Text>
          <Pressable onPress={jazzfishLink}>
            <Image
              source={require("../../assets/public/images/jazzfishCover.png")}
              style={InfoStyles.jfLogo}
            ></Image>
          </Pressable>
          <Text style={InfoStyles.jfBlurb}>
            Meet jazzfish, a highly skilled New York guitarist weaving soulful
            melodies and electrifying riffs, enriched by their Jewish heritage.
            Beyond music, their genuine passion lies in the artistry of
            bread-making, adding a unique layer to their multifaceted persona..{" "}
          </Text>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InfoScreen;
