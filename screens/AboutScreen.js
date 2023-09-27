import { StyleSheet, Text, View, ScrollView, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import Logo from "../components/Logo";

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/background/bg-1.jpg")}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <Logo />
      <ScrollView>
        <Text style={styles.aboutText}>
          Welcome to the world of TicTacToe, where
          classic gameplay meets modern technology! TicTacToe is a delightful
          mobile game that brings the timeless fun of Tic-Tac-Toe to your
          fingertips, with a fresh twist. Whether you're a casual gamer looking
          for a quick distraction or a seasoned strategist aiming for the
          perfect winning streak, this game has something for everyone.
        </Text>
      </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  aboutText :{
    color :'white',
    fontSize : 30,
    textAlign: 'center',
    margin: 13
  }
});
