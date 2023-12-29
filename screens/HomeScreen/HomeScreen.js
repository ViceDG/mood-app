import { useState, useCallback, useRef } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import homeScreenStyles from "./HomeScreen.styles";
import { Video, ResizeMode } from "expo-av";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { videoObj } from "../../data/videos";

const HomeScreen = ({ navigation }) => {
  const video = useRef(null);
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
      <View style={homeScreenStyles.appMain}>
        <Text
          style={{
            ...homeScreenStyles.appTitle,
            fontFamily: "Baloo-Bhaijaan2",
          }}
        >
          Zen Portal
        </Text>
        <Text
          style={{
            ...homeScreenStyles.flavorText,
            fontFamily: "Baloo-Bhaijaan2",
          }}
        >
          Travel to your happy place, virtually...
        </Text>
      </View>
      <Video
        ref={video}
        style={homeScreenStyles.video}
        source={videoObj.home}
        resizeMode={ResizeMode.COVER}
        isMuted
        shouldPlay={true}
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <TouchableOpacity
        style={homeScreenStyles.opacityView}
        onPress={() => navigation.navigate("SceneSelect")}
      >
        <View style={homeScreenStyles.button}>
          <Text style={{ ...homeScreenStyles.buttonText }}>Get Started</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
