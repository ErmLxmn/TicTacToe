// PlayerChoiceScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function PlayerChoiceScreen({ navigation }) {
  const [playerSymbol, setPlayerSymbol] = useState(null);

  const handleSymbolSelect = (symbol) => {
    setPlayerSymbol(symbol);
    navigation.navigate('RandomPlayerScreen', { playerSymbol: symbol });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Your Symbol:</Text>
      <TouchableOpacity
        style={[styles.symbolButton, playerSymbol === 'X' ? styles.selectedSymbol : {}]}
        onPress={() => handleSymbolSelect('X')}
      >
        <Text style={styles.symbolText}>X</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.symbolButton, playerSymbol === 'O' ? styles.selectedSymbol : {}]}
        onPress={() => handleSymbolSelect('O')}
      >
        <Text style={styles.symbolText}>O</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  symbolButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#3f08a6',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  selectedSymbol: {
    backgroundColor: 'green', // Add a different color for the selected symbol
  },
  symbolText: {
    fontSize: 24,
    color: 'white',
  },
});
