import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Alert, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { getAuth, signInWithEmailAndPassword, UserCredential } from '@firebase/auth';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordBool, setPasswordBool] = useState(true);

  const auth = getAuth();

  const loginUser = () => {
    signInWithEmailAndPassword(auth, email.trim(), password.trim())
      .then((user: UserCredential) => {
        Alert.alert("Login Successful", "Redirecting to Home Page", [{
          text: "Cancel",
          onPress: () => {},
          style: "cancel"
        }], {
          cancelable: true,
          onDismiss: () => {}
        })
      }, (error) => {
        console.log(error.code);
        Alert.alert("Login Failed", error.message, [], {
          cancelable: true,
          onDismiss: () => {}
        })
      })
  }

  // const googleUser = () => {
  //   const provider = new GoogleAuthProvider();
  //   signInWithPopup(auth, provider).then((userCred: UserCredential) => {
  //     console.log(">>> UserCred: ", userCred);
      
  //   }, (error) => {
  //     console.log(">>> error: ", error)
  //   })
  // }

  return (
    <View style={styles.conatiner}>
      <Text style={styles.mainHeading}>Login Screen</Text>

      <View style={[styles.textInputContainer, { marginTop: 40 }]}>
        <Ionicons name="mail" style={styles.textIcon} />
        <TextInput value={email} onChangeText={setEmail} keyboardType="email-address" placeholder="Enter Email" style={styles.textInput} />
      </View>
      <View style={styles.textInputContainer}>
        <Ionicons name="key" style={styles.textIcon} />
        <TextInput value={password} onChangeText={setPassword} secureTextEntry={passwordBool} placeholder="Enter Password" style={styles.textInput} />
        <TouchableOpacity onPress={() => setPasswordBool(!passwordBool)}>
          <Ionicons name={passwordBool ? "eye" : "eye-off"} style={styles.textIcon} />
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 40 }}>
        <Button onPress={loginUser} title="Login"></Button>
        <TouchableOpacity>
          <Text></Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
    padding: 18
  },
  mainHeading: {
    fontSize: 32,
    textAlign: 'center',
    padding: 10,
    marginTop: 20
  },
  textInputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // borderRadius: 8,
    // borderWidth: 1,  
    // borderColor: '#a0a0a0',
    // padding: 4,
    marginTop: 10,
    borderBottomWidth: 1
  },
  textInput: {
    flex: 1,
    padding: 10,
    marginRight: 4,
  },
  textIcon: {
    fontSize: 18, 
    padding: 10 
  }
})
