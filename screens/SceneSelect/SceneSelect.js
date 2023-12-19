import React from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
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
import { useThemeStore } from "../../store";

const SceneSelect = ({ navigation }) => {
  const setTheme = useThemeStore((state) => state.setTheme);
  const sceneObj = {
    desert: desert,
    field: field,
    mountains: mountains,
    snow: snow,
    space: space,
    swamp: swamp,
  };

  const handleClick = (data) => {
    setTheme(data);
    navigation.navigate("SceneView");
  };

  return (
    <View style={sceneSelectStyles.selectContainer}>
      <Text style={sceneSelectStyles.headerText}>SELECT A SCENE</Text>
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
