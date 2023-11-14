import React from "react";
import {
  View, Text, Image, TextInput, TouchableOpacity,
  Platform, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback
} from "react-native";
import { styles2 } from "./styles2";
import { StatusBar } from "expo-status-bar";
import { FontAwesome5 } from "@expo/vector-icons"

export default function App() {
  return (
    <KeyboardAvoidingView behavior={'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles2.container}>

          <StatusBar backgroundColor="#FFF" translucent={false} />

          <Image
            source={require("./assets/img/logo.png")}
            style={styles2.logo}
          />

          <View style={styles2.signUpContainer}>
            <TouchableOpacity>
              <Text style={styles2.signUpText}>Sign up to see photos and videos</Text>
              <Text style={styles2.signUpText2}>from your friends.</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles2.facebookContainer}>
            <FontAwesome5 name="facebook" size={25} color="#FFF" />
            <Text style={styles2.facebookText}>Log in with Facebook</Text>
          </TouchableOpacity>

          <View style={styles2.divisor}>
            <View style={styles2.divisorLine}></View>
            <Text style={{
              marginHorizontal: '5%', color: '#C4C4C4', fontSize: 18,
              fontWeight: 'bold'
            }}>OR</Text>
            <View style={styles2.divisorLine}></View>
          </View>

          <TextInput
            placeholder="Mobile Number or Email"
            style={styles2.input}
          />

          <TextInput
            placeholder="Full Name"
            style={styles2.input}
          />

          <TextInput
            placeholder="Username"
            style={styles2.input}
          />

          <TextInput
            placeholder="Password"
            style={styles2.input}
          />

          <View style={styles2.termsContainer1}>
            <Text style={styles2.termsText}>People who use our service may have uploaded</Text>
            <Text style={styles2.termsText}>your contact information to Instagram.</Text>
            <TouchableOpacity>
              <Text style={styles2.termsButton}>Learn More</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles2.signUpButton}>
            <Text style={styles2.signUpButtonText}>Sign up</Text>
          </TouchableOpacity>

          <View style={styles2.finalDivisor}>
            <View style={styles2.finalLine}></View>
          </View>

          <View style={styles2.loginContainer}>
            <Text style={styles2.loginText}>Have an account?</Text>
            <TouchableOpacity>
              <Text style={styles2.loginButton}>Log in</Text>
            </TouchableOpacity>
          </View>

        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

// export default App;