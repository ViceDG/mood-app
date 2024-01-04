import { StyleSheet } from "react-native";

const InfoStyles = StyleSheet.create({
  headerText: {
    color: "#5f8971",
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
    marginHorizontal: 10,
  },
  infoButton: {
    textAlign: "center",
  },
  bgImage: {
    height: "100%",
    width: "100%",
    flex: 1
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
    height: '100%',
    width: '100%',
  },
  aboutContainer:{
    height:'100%',
  },
  vdgLogo:{
    width: 275,
    height: 100,
    marginTop: 80,
    alignSelf: 'center',
    margin: 'auto'
  },
  vdgBlurb:{
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'lighter',
    marginVertical: 20,
    padding: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  jfLogo:{
    width: 275,
    height: 150,
    marginTop: 70,
    alignSelf: 'center',
    margin: 'auto',
    borderRadius: 25,
  },
  jfBlurb:{
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'lighter',
    marginVertical: 30,
    padding: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  }
});

export default InfoStyles;