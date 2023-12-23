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
  swIconContainer:{
    flex: 1,
    width: 75,
    height: 75,
    resizeMode: 'contain',
    zIndex: 5,
    top: '80%',
    left: '41.5%',
    position: "absolute",
  },
  swIcon:{
    flex: 1,
    width: 75,
    height: 75,
  },
  showTimer:{

  },
  hideTimer:{
    opacity: 0
  }
});

export default sceneViewStyles;
