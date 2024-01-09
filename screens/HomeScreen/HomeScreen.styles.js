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
    zIndex: 0,
    height: "100%",
    width: "100%",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  appTitle: {
    textAlign: "center",
    color: "#f2e5c8",
    fontSize: 70,
    marginBottom: -30,
  },
  flavorText: {
    textAlign: "center",
    color: "#f2e5c8",
    fontSize: 15,
  },
  appMain: {
    flex: 1,
    justifyContent: "center",
    position: "absolute",
    margin: "auto",
    zIndex: 3,
  },
  button: {
    position: "absolute",
    alignSelf: "center",
    bottom: 40,
    backgroundColor: "#f2e5c8",
    width: "90%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  buttonText: {
    textAlign: "center",
    padding: 8,
    color: "black",
    margin: "auto",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default homeScreenStyles;
