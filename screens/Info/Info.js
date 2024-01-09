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

  const pexelsLink = () => {
    Linking.openURL("https://www.pexels.com/");
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
                source={require("../../assets/mainLogo.png")}
                style={InfoStyles.vdgLogo}
                resizeMode="contain"
              ></Image>
            </Pressable>
            <Text style={InfoStyles.vdgBlurb}>
              This app was developed as a collaborative effort among Vice Dev
              Group! We are a small dedicated collective of full-stack
              developers looking to expand and utilize our skills through a
              variety of development projects.{" "}
              <Text style={InfoStyles.textLink} onPress={vdgLink}>
                Check out our site
              </Text>{" "}
              and let us know if you have a mobile, web or desktop app idea
              you'd like to work with us on!{" "}
            </Text>
            <Pressable onPress={jazzfishLink}>
              <Image
                source={require("../../assets/public/images/jazzfishCover.png")}
                style={InfoStyles.jfLogo}
              ></Image>
            </Pressable>
            <Text style={InfoStyles.jfBlurb}>
              This project would not have been possible without Jazzfish, a
              highly skilled guitarist originating from the East Coast. He has a
              long, storied history of weaving soulful melodies and electrifying
              riffs, enriched by his passion for a massive variety of music
              genres and cultures.{" "}
              <Text style={InfoStyles.textLink} onPress={jazzfishLink}>
                Browse his catalog on soundcloud
              </Text>{" "}
              and let his music take you even further into bliss!{" "}
            </Text>
            <Pressable onPress={pexelsLink}>
              <Image
                source={require("../../assets/public/images/pexelsLogo.png")}
                style={InfoStyles.jfLogo}
              ></Image>
            </Pressable>
            <Text style={InfoStyles.jfBlurb}>
              The best free stock photos, royalty free images & videos shared by
              creators.{" "}
              <Text style={InfoStyles.textLink} onPress={pexelsLink}>
                Explore the scenic landscapes
              </Text>{" "}
              and more captured by a variety of photographers and videographers!{" "}
            </Text>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InfoScreen;
