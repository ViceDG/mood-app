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
    color: "#f2e5c8",
  },
  buttonContainer: {
    flexDirection: "column",
    width: "45%",
    marginLeft: "5%",
  },
  clearButton: {
    borderRadius: 10,
    textAlign: "center",
    overflow: "hidden",
    padding: 5,
  },
  stopButton: {
    padding: 5,
    textAlign: "center",
    overflow: "hidden",
    marginTop: "20%",
  },
  startButton: {
    borderColor: "black",
    padding: 10,
    textAlign: "center",
    marginTop: "20%",
  },
});

export default stopwatchStyles;
