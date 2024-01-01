import { useState, useCallback, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import InfoStyles from "./Info.styles";

const InfoScreen = () => {
  return (
    <SafeAreaView style={InfoStyles.selectContainer}>
      <ScrollView>
        <Text
          style={{
            ...InfoStyles.headerText,
            fontFamily: "Baloo-Bhaijaan2",
          }}
        >
          About
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InfoScreen;
