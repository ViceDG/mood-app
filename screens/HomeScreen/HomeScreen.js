import React from "react";
import { Video, ResizeMode } from "expo-av";
import { View, Text, Button } from "react-native";
import homeScreenStyles from "./HomeScreen.styles";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({ navigation }) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (
    <View style={homeScreenStyles.videoView}>
      <Text style={homeScreenStyles.AppTitle}>Mood App</Text>
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
