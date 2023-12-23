import { StyleSheet } from "react-native";

const stopwatchStyles = StyleSheet.create({
  stopwatchContainer: {
    position: "absolute",
    height: "30%",
    width: "100%",
    zIndex: 4,
    left: "22.5%",
    top: "30%",
    flexDirection: "column",
  },
  time: {
    fontSize: 90,
    color: "white",
  },
  buttonContainer: {
    flexDirection: "column",
    width: "45%",
    marginLeft: "5%",
  },
  clearButton: {
    fontSize: 20,
    backgroundColor: "gray",
    borderColor: "black",
    borderRadius: 10,
    textAlign: "center",
    overflow: "hidden",
    padding: 5,
  },
  stopButton: {
    fontSize: 20,
    backgroundColor: "#E34234",
    borderColor: "black",
    padding: 5,
    borderRadius: 10,
    textAlign: "center",
    overflow: "hidden",
    marginTop: "20%",
  },
  startButton: {
    fontSize: 20,
    backgroundColor: "#3dd276",
    borderColor: "black",
    padding: 5,
    borderRadius: 10,
    textAlign: "center",
    overflow: "hidden",
    marginTop: "20%",
  },
});

export default stopwatchStyles;
