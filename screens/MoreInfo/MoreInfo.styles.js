import { StyleSheet } from "react-native";

const moreInfoStyles = StyleSheet.create({
  headerText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 30,
    marginHorizontal: 10,
  },
  bgImage: {
    height: "100%",
    width: "100%",
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
  },
});

export default moreInfoStyles;
