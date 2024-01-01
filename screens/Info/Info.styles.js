import { StyleSheet } from "react-native";

const InfoStyles = StyleSheet.create({
  infoContainer:{
    flex: 1,
    paddingTop: 5,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#101010",
  },
  headerText: {
    color: "black",
    fontWeight: "bold",
    paddingTop: 50,
    fontSize: 20,
    textAlign: "center",
    backgroundColor: "rgba(242, 229, 200, .9)",
  },
});

export default InfoStyles;