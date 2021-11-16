import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ListView from './src/List';

const STACK = createNativeStackNavigator();
const HomeScreen = ({ navigation }) => (
  <View>
    <Text>Home Screen</Text>
    <Button title="Student List" onPress={() => navigation.navigate("list")} />
  </View>
);

const ProfileScreen = () => (
  <View>
    <Text>Home Screen</Text>
  </View>
);

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <STACK.Navigator initialRouteName="home">
        <STACK.Screen name="home" component={HomeScreen} />
        <STACK.Screen name="profile" component={ProfileScreen} />
        <STACK.Screen name="list" component={ListView} />
      </STACK.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 44, 
    color: '#458798', 
    letterSpacing: 4
  },
  subHeading: {
    fontSize: 30, 
    color: '#a0a0a0'
  },
  image: {
    padding: 12,
    borderRadius: 25,
    width: 300,
    height: 256,
    marginTop: 24,
    shadowColor: 'black',
    shadowOffset: {
      width: 300,
      height: -256
    },
    shadowOpacity: 0.7,
    shadowRadius: 1,
    // elevation: 4r
  }
});
