import React from "react";
import { Video, ResizeMode } from "expo-av";
import { View, Text, TouchableOpacity } from "react-native";
import homeScreenStyles from "./HomeScreen.styles";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState, useCallback } from "react";

const HomeScreen = ({ navigation }) => {
  const video = React.useRef(null);
  const [status, setStatus] = useState({});
  const [fontsLoaded] = useFonts({
    "Baloo-Bhaijaan2": require("../../assets/public/fonts/BalooBhaijaan2-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={homeScreenStyles.videoView} onLayout={onLayoutRootView}>
      <Text
        style={{ ...homeScreenStyles.AppTitle, fontFamily: "Baloo-Bhaijaan2" }}
      >
        Mood App
      </Text>
      <Video
        ref={video}
        style={homeScreenStyles.video}
        source={require("../../assets/public/video/mainScreenVideo.mp4")}
        resizeMode={ResizeMode.COVER}
        isMuted
        shouldPlay={true}
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <View style={homeScreenStyles.textView}>
        <TouchableOpacity onPress={() => navigation.navigate("SceneSelect")}>
          <Text
            style={{ ...homeScreenStyles.text1, fontFamily: "Baloo-Bhaijaan2" }}
          >
            Welcome to Mood App!
          </Text>
          <Text
            style={{ ...homeScreenStyles.text2, fontFamily: "Baloo-Bhaijaan2" }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
