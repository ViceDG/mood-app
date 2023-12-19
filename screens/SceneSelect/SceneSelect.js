import React from "react";
import { View, Text, Button, FlatList, Image, TouchableOpacity } from "react-native";
import themes from "../../data/themes.json";
import {
  desert,
  field,
  mountains,
  snow,
  swamp,
  space,
} from "../../data/images";
import sceneSelectStyles from "./SceneSelect.styles";

const SceneSelect = ({ navigation }) => {
  const sceneObj = {
    desert: desert,
    field: field,
    mountains: mountains,
    snow: snow,
    swamp: swamp,
    space: space,
  };

  const handleClick = (data) => {
    // setTheme(data);
    console.log(data + ' clicked');
  };

  return (
    <View style={sceneSelectStyles.selectContainer}>
      <Text>Select your scene</Text>
      <FlatList
        data={themes}
        numColumns={3}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            key={index}
            style={sceneSelectStyles.selectItem}
            onPress={() => handleClick(item.name)}
          >
            <Image
              source={sceneObj[item.name]}
              style={sceneSelectStyles.selectImage}
            />
            <Text style={sceneSelectStyles.selectButton}>
              {item.name.toUpperCase()}
            </Text>
          </TouchableOpacity>
        )}
      />
      <Button title="Back" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default SceneSelect;
