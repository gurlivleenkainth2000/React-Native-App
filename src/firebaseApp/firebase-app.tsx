import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ActivityIndicator, Platform } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getAuth, User } from 'firebase/auth';
import { firebaseConfig } from '../helper/Constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './authentication/login';
import Register from './authentication/register';
import Home from './home/home';

const STACK = createNativeStackNavigator();

export default function FirebaseApp() {

  const [user, setUser] = useState({});
  const [loader, setLoader] = useState(true);

  const checkUserSignedIn = () => {
    const auth = getAuth();
    if (auth.currentUser) {
      setUser(auth.currentUser);
      setLoader(false);
      // console.log(">>> User Signed In");
    } else {
      setLoader(false);
      // console.log(">>> User not Signed In");
    }
  };

  useEffect(() => {
    try {
      console.log(Platform.OS);
      
      initializeApp(firebaseConfig);
      checkUserSignedIn();
      // console.log(">>> Firebase Initialised Successfully...");
    } catch (error) {
      console.log(">>> Something went wrong...");
    }

  }, []);

  return (
    loader ? <ActivityIndicator style={styles.loader} /> :
      <NavigationContainer>
        <STACK.Navigator initialRouteName={!user ? 'Home' : 'Login'}>
          <STACK.Screen name="Login" component={Login} options={{
            title: "Login",
            headerShown: false
          }} />
          <STACK.Screen name="Register" component={Register} options={{
            title: "Register",
            headerShown: false
          }} />
          <STACK.Screen name="Home" component={Home} />
        </STACK.Navigator>
      </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    backgroundColor: '#000'
  }
})
