import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'
import ListView from './List';
import NewsAPIComponent from './NewsAPIComponent';

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

export default function tApp() {
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
  )
}
