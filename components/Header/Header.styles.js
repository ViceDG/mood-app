import { StyleSheet } from "react-native";

const headerStyles = StyleSheet.create({
  headerText: {
    color: "#81272e",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 30,
    marginVertical: "5%",
    marginHorizontal: 20,
  },
  infoButton: {
    textAlign: "center",
  },
});

export default headerStyles;
