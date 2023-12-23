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
      <Text
        style={{ ...homeScreenStyles.AppTitle, fontFamily: "Baloo-Bhaijaan2" }}
      >
        Zen Portal
      </Text>
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
      <View style={homeScreenStyles.textView}>
        <TouchableOpacity
          style={homeScreenStyles.opacityView}
          onPress={() => navigation.navigate("SceneSelect")}
        >
          <Text style={{ ...homeScreenStyles.text1 }}>
            Relaxation in an app
          </Text>
          <View style={homeScreenStyles.button}>
            <Text style={{ ...homeScreenStyles.text2 }}>Get Started</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
