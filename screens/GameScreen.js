// TicTacToeBoard.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import TicTacToeBoard from '../components/TicTacToeBoard';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from '../components/Logo';

export default function GameScreen({ route }) {
  const { playerSymbol, cpuSymbol, randomChoice } = route.params;
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/background/bg-1.jpg")}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
      <Logo/>
      <TicTacToeBoard playerSymbol={playerSymbol} cpuSymbol={cpuSymbol} player={randomChoice} navigation={navigation}/> 
      </ImageBackground>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  // Add styles for the game board cells, winner message, etc.
});
