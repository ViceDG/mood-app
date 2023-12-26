import { StyleSheet } from "react-native";

const sceneViewStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  video: {
    alignSelf: "center",

    height: "100%",
    width: "100%",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
  swIconContainer: {
    flex: 1,
    zIndex: 2,
    top: "80%",
    width: "100%",
    position: "absolute",
    textAlign: "center",
    flexDirection: "column",
  },
  showTimer: {
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(52, 52, 52, 0)",
  },
  hideTimer: {
    opacity: 0,
  },
});

export default sceneViewStyles;
