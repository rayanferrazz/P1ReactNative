import React from "react";
import {
    View, Text, Image, TextInput, TouchableOpacity,
    Platform, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback
} from "react-native";
import { styles } from "./styles";
import { StatusBar } from "expo-status-bar";
import { FontAwesome5 } from "@expo/vector-icons"

export default function App() {
    return (
        <KeyboardAvoidingView behavior={'height'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>

                    <StatusBar backgroundColor="#FFF" translucent={false} />

                    <Image
                        source={require("./assets/img/logo.png")}
                        style={styles.logo}
                    />

                    <TextInput
                        placeholder="Phone number, username or email address"
                        style={styles.input}
                    />

                    <TextInput
                        placeholder="Password"
                        style={styles.input}
                    />

                    <View style={styles.forgotContainer}>
                        <TouchableOpacity>
                            <Text style={styles.forgotText}>Forgotten password?</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.loginButton}>
                        <Text style={styles.loginText}>Log In</Text>
                    </TouchableOpacity>

                    <View style={styles.divisor}>
                        <View style={styles.divisorLine}></View>
                            <Text style={{ marginHorizontal: '5%', color: '#C4C4C4' }}>OR</Text>
                        <View style={styles.divisorLine}></View>
                    </View>

                    <TouchableOpacity style={styles.facebookContainer}>
                        <FontAwesome5 name="facebook" size={25} color="#399FFF" />
                        <Text style={styles.facebookText}>Log in with Facebook</Text>
                    </TouchableOpacity>

                    <View style={styles.finalDivisor}>
                        <View style={styles.finalLine}></View>
                    </View>

                    <View style={styles.signUpContainer}>
                        <Text style={styles.signUpText}>Don't have an account?</Text>
                        <TouchableOpacity>
                            <Text style={styles.signUpButton}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}