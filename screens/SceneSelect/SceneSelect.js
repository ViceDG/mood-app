import React from "react";
import { View, Text, Button, FlatList, Image } from "react-native";
import themes from "../../data/themes.json";
import { desert, field, mountains, snow, swamp } from "../../data/images";

const SceneSelect = ({ navigation }) => {
  const sceneObj = {
    desert: desert,
    field: field,
    mountains: mountains,
    snow: snow,
    swamp: swamp,
  };

  return (
    <View>
      <Text>Select your scene</Text>
      <FlatList
        data={themes}
        renderItem={({ item, index }) => (
          <View key={index}>
            <Image source={sceneObj[item.name]} />
            <Text>{item.name}</Text>
            <Button title="Select">Select</Button>
          </View>
        )}
      />
      <Button title="Back" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default SceneSelect;
