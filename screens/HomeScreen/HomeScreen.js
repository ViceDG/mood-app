import React from "react";
import { Video, ResizeMode } from "expo-av";
import { View, Text, Button } from "react-native";
import homeScreenStyles from "./HomeScreen.styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Font from 'expo-font';
import { useEffect, useState } from "react";




const CustomText = (props) => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'custom-font': require('../../assets/public/fonts/BalooBhaijaan2-Bold.ttf'),
      });

      setFontLoaded(true);
    }

    loadFont();
  }, []);

  if (!fontLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <Text style={{ ...props.style, fontFamily: 'custom-font' }}>
      {props.children}
    </Text>
  );
};


const HomeScreen = ({ navigation }) => {
  const video = React.useRef(null);
  const [status, setStatus] = useState({});



  return (
    <View style={homeScreenStyles.videoView}>
      <Text style={{...homeScreenStyles.AppTitle, fontFamily: 'custom-font'}}>Mood App</Text>
      <Video
        ref={video}
        style={homeScreenStyles.video}
        source={require("../../assets/public/video/mainScreenVideo.mp4")}
        resizeMode={ResizeMode.COVER}
        isMuted
        shouldPlay={"true"}
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <View style={homeScreenStyles.textView}>
        <TouchableOpacity onPress={() => navigation.navigate("SceneSelect")}>
        <Text style={homeScreenStyles.text1}>Welcome to Mood App!</Text>
          <Text style={homeScreenStyles.text2}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
