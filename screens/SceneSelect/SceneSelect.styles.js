import { StyleSheet } from "react-native";

const sceneSelectStyles = StyleSheet.create({
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
  username: {
    backgroundColor: "#101010",
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    textAlign: "center",
    borderRadius: 20,
  },
  userLocation: {
    color: "grey",
    fontSize: 10,
    marginLeft: 10,
    marginBottom: 2,
  },
  captionUsername: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  captionText: {
    color: "black",
    fontSize: 16,
  },
  eventText: {
    color: "gray",
    fontSize: 14,
  },
  eventNameCamp: {
    color: "black",
    marginLeft: 10,
    flexDirection: "row",
    paddingRight: 10,
    marginTop: 5,
    paddingBottom: 10,
    borderBottomColor: "#DCDCDC",
    borderBottomWidth: 1,
  },
  captionCamp: {
    color: "black",
    marginLeft: 10,
    marginRight: 30,
    marginTop: 5,
    marginBottom: 25,
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  postInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
  },
  postImg: {
    width: "100%",
    height: 500,
    alignSelf: "center",
  },
  activityinfo: {
    color: "black",
    marginHorizontal: 10,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  like: {
    flexDirection: "row",
    alignItems: "center",
  },
  likeText: {
    backgroundColor: "black",
    fontSize: 18,
    marginLeft: 4,
  },
  dropdDownIcon: {
    marginRight: 20,
    marginLeft: 10,
    alignContent: "flex-end",
    alignItems: "flex-end",
  },
});

export default sceneSelectStyles;
