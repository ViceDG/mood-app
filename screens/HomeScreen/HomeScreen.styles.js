import { StyleSheet } from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";

const homeScreenStyles = StyleSheet.create({
  videoView: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "none ",
  },
  video: {
    alignSelf: "center",

    height: "100%",
    width: "100%",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  AppTitle: {
    color: "white",
    fontSize: 30,
    height: "20%",
    position: "absolute",
    zIndex: 1,
  },
  textView: {
    width: "100%",
    height: "30%",
    backgroundColor: "green",
    color: "red",
    fontWeight: "bold",
  },

  text1: {
    textAlign: "center",
    paddingTop: 35,
  },
  text2: {
    textAlign: "center",
    paddingTop: 20,
  },
});

export default homeScreenStyles;
