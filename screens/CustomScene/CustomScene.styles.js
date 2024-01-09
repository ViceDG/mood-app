import { StyleSheet } from "react-native";

const customSceneStyles = StyleSheet.create({
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
  selectImage: {
    borderRadius: 25,
    width: 100,
    height: 100,
    marginBottom: 5,
  },
  selectContainer: {
    flex: 1,
    flexDirection: "column",
  },
  selectItem: {
    alignItems: "center",
    flexDirection: "row",
    margin: 5,
    backgroundColor: "rgba(243, 220, 170, .7) ",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
  },
  itemContainer: {
    padding: 10,
    paddingTop: 0,
    height: "100%",
    width: "75%",
  },
  selectDescription: {
    color: "black",
    flex: 2,
  },
  selectCredit: {
    backgroundColor: "#81272e",
    color: "white",
    textAlign: "center",
    width: "75%",
    height: 20,
    borderRadius: 10,
    overflow: "hidden",
  },
  itemTitle: {
    color: "black",
    fontWeight: "bold",
    paddingVertical: 5,
    borderRadius: 10,
  },
  itemTop: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 5,
  },
  selectList: {
    flexGrow: 1,
    width: "100%",
    justifyContent: "center",
    alignSelf: "center",
  },
});

export default customSceneStyles;
