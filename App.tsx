import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import ListView from './src/List';
import { createDrawerNavigator } from '@react-navigation/drawer';
import NewsAPIComponent from './src/NewsAPIComponent';

const STACK = createNativeStackNavigator();
const DRAWER = createDrawerNavigator();

const HomeScreen = ({ navigation }: { navigation: any }) => (
  <View>
    <Text>Home Screen</Text>
    <Button title="Student List" onPress={() => navigation.navigate("list")} />
  </View>
);

const ProfileScreen = () => (
  <View>
    <Text>Profile Screen</Text>
  </View>
);

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <DRAWER.Navigator initialRouteName="news">
        <DRAWER.Screen name="home" component={HomeScreen} options={{
          title: 'Home',
          drawerIcon: (props) => (
            <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/25/25694.png", height:props.size, width: props.size }} />
          ),
          drawerPosition: 'left'
        }} />
        <DRAWER.Screen name="profile" component={ProfileScreen} options={{
          title: 'Profile',
          drawerIcon: (props) => (
            <Image source={{ uri: "https://static.thenounproject.com/png/630740-200.png", height:props.size, width: props.size }} />
          ),
        }} />
        <DRAWER.Screen name="list" component={ListView} options={{
          title: 'List',
          drawerIcon: (props) => (
            <Image source={{ uri: "https://cdn3.iconfinder.com/data/icons/text/100/list-512.png", height:props.size, width: props.size }} />
          ),
        }} />
        <DRAWER.Screen name="news" component={NewsAPIComponent} options={{
          title: 'News',
          drawerIcon: (props) => (
            <Image source={{ uri: "https://cdn2.iconfinder.com/data/icons/picol-vector/32/news-512.png", height:props.size, width: props.size }} />
          ),
        }} />
      </DRAWER.Navigator>
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
