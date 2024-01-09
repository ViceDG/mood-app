import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import HeaderStyles from "./Header.styles";

const Header = ({ navigation, title = "Zen Portal", goto="InfoScreen"}) => {
  return (
    <View style={HeaderStyles.header}>
      <TouchableOpacity
        style={HeaderStyles.infoButton}
        onPress={() => navigation.navigate("Home")}
      >
        <Entypo name="home" size={25} color="#5f8971" />
      </TouchableOpacity>
      <Text
        style={{
          ...HeaderStyles.headerText,
          fontFamily: "Baloo-Bhaijaan2",
        }}
      >
        {title}
      </Text>
      <TouchableOpacity
        style={HeaderStyles.infoButton}
        onPress={() => navigation.navigate(goto)}
      >
        <Entypo name={goto === "InfoScreen" ? "info-with-circle" : "list"} size={25} color="#5f8971" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
