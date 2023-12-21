import { StyleSheet } from "react-native";

const sceneSelectStyles = StyleSheet.create({
  headerText: {
    color: "black",
    fontWeight: "bold",
    paddingTop: 50,
    fontSize: 20,
    textAlign: "center",
    backgroundColor: 'rgba(242, 229, 200, .9)'
  },
  bgImage:{
    height: "100%",
    width: "100%",
    
  },
  selectImage: {
    borderRadius: 15,
    width: 100,
    height: 100,
    marginBottom: 5,
  },
  selectContainer: {
    flex: 1,
    paddingTop: 20,
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
    borderRadius: 10,
  },
  selectList: {
    flexGrow: 1,
    height: '100%',
    width:'100%',
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: 'rgba(242, 229, 200, .9)'
  },
});

export default sceneSelectStyles;
