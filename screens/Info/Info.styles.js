import { StyleSheet } from "react-native";

const InfoStyles = StyleSheet.create({
  headerText: {
    color: "#5f8971",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  bgImage: {
    height: "100%",
    width: "100%",
    flex: 1,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(242, 229, 200, .9)",
  },
  selectContainer: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
  },
  vdgLogo: {
    width: 275,
    height: 100,
    marginTop: 40,
    alignSelf: "center",
    margin: "auto",
  },
  vdgBlurb: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "light",
    marginVertical: 20,
    padding: 10,
  },
  textLink: {
    fontSize: 20,
    fontWeight: "light",
    color: "blue",
  },
  jfLogo: {
    width: 275,
    height: 275,
    marginTop: 40,
    alignSelf: "center",
    margin: "auto",
    borderRadius: 25,
  },
  jfBlurb: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "light",
    marginVertical: 30,
    padding: 10,
  },
});

export default InfoStyles;
