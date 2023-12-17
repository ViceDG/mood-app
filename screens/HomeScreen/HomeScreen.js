// Home Screen
import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to Mood App!</Text>
      <Button
        title="Get Started"
        onPress={() => navigation.navigate('SceneSelect')}
      />
    </View>
  );
};

export default HomeScreen;
