// RandomPlayerScreen.js
import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function RandomPlayerScreen({ route, navigation }) {
  const { playerSymbol } = route.params;
  const cpuSymbol = playerSymbol === 'X' ? 'O' : 'X';

  useEffect(() => {
    const randomChoice = Math.random() < 0.5 ? 'player' : 'cpu';
    if (randomChoice === 'player') {
      // Player goes first
      navigation.navigate('GameScreen', { playerSymbol, cpuSymbol });
    } else {
      // CPU goes first
      navigation.navigate('GameScreen', { playerSymbol: cpuSymbol, cpuSymbol: playerSymbol });
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Randomly Choosing the Starting Player...</Text>
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
  },
});
