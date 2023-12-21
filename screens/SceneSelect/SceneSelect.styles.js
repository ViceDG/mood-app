import { StyleSheet } from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";

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
  selectDescription:{
   color: 'black', 
   flex: 2,
  },
  selectImage: {
    borderRadius: 25,
    width: 100,
    height: 100,
    marginBottom: 5,
  },
  selectContainer: {
    flex: 1,
    paddingTop: 5,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#101010",
  },
  selectItem: {
    alignItems: "center",
    flexDirection: 'row',
    margin: 5,
    backgroundColor:"rgba(243, 220, 170, .7) ",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
  },
  itemContainer:{
    paddingLeft: 10,
    padding: 5,
    height: '100%'
  },
  selectCredit:{
    backgroundColor: '#E34234',
    color:'white',
    textAlign: 'center',
    width: '50%',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  selectButton: {
    color: "black",
    fontWeight: "bold",
    paddingVertical: 5,
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
