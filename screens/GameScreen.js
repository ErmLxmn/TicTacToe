// TicTacToeBoard.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import TicTacToeBoard from '../components/TicTacToeBoard';

export default function GameScreen({ route }) {
  const { playerSymbol, cpuSymbol } = route.params;

  return (
    <View style={styles.container}>
      <TicTacToeBoard playerSymbol={playerSymbol} cpuSymbol={cpuSymbol} /> 
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Add styles for the game board cells, winner message, etc.
});
