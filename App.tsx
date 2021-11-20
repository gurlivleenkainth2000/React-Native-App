import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function App(): JSX.Element {
  return (
    <View></View>
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
