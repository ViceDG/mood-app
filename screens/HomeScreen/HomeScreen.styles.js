import { StyleSheet } from "react-native";

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
    zIndex: 1,
    height: "100%",
    width: "100%",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  AppTitle: {
    color: "#f2e5c8",
    fontSize: 70,
    height: "20%",
    position: "absolute",
    zIndex: 3,
  },
  textView: {
    width: "100%",
    top: 730,
    backgroundColor: "transparent",
    flexDirection: "column",
    position: "absolute",
    zIndex: 2,
  },
  opacityView: {
    backgroundColor: "transparent",
  },
  button: {
    backgroundColor: "#f2e5c8",
    width: "90%",
    marginLeft: "5%",
    margin: "auto",
    marginTop: "10%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  text1: {
    textAlign: "center",
    paddingTop: 15,
    color: "#f2e5c8",
    fontSize: 15,
    fontWeight: "bold",
  },
  text2: {
    textAlign: "center",
    padding: 8,
    color: "black",
    margin: "auto",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default homeScreenStyles;
