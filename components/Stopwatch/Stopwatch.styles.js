import { StyleSheet } from "react-native";

const stopwatchStyles = StyleSheet.create({
  stopwatchContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    height: "30%",
    width: "100%",
    zIndex: 4,
    top: "30%",
    flexDirection: "column",
  },
  time: {
    fontSize: 90,
    color: "#f2e5c8",
  },
  buttonContainer: {
    flexDirection: "column",
  },
  clearButton: {
    borderRadius: 10,
    textAlign: "center",
    padding: 5,
  },
  stopButton: {
    padding: 10,
    textAlign: "center",
    marginTop: 20,
  },
  startButton: {
    padding: 10,
    textAlign: "center",
    marginTop: 20,
  },
});

export default stopwatchStyles;
