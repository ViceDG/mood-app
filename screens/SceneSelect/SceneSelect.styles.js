import { StyleSheet } from "react-native";

const sceneSelectStyles = StyleSheet.create({
  headerText: {
    color: "white",
    fontWeight: "bold",
    paddingTop: 20,
    fontSize: 20,
    textAlign: "center",
  },
  selectImage: {
    borderRadius: 50,
    width: 100,
    height: 100,
    marginBottom: 5,
  },
  selectContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#101010",
  },
  selectItem: {
    alignItems: "center",
    margin: 20,
  },
  selectButton: {
    flex: 1,
    justifyContent: "center",
    color: "white",
    backgroundColor: "gray",
    textAlign: "center",
    fontWeight: "bold",
    paddingVertical: 10,
    width: 100,
    borderRadius: 20,
  },
  selectList: {
    flexGrow: 1,
    justifyContent: "center",
    alignSelf: "center",
  },
});

export default sceneSelectStyles;
