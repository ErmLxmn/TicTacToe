import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function Logo() {
  return (
    <Text style={styles.text}>TicTacToe</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    color: '#3f08a6',
    textShadowColor: 'white', // Set the shadow color to white
    textShadowOffset: { width: 2, height: 2 }, // Adjust the offset for desired outline thickness
    textShadowRadius: 5, // Adjust the radius for desired blur effect
    fontSize: 75, // Set your desired font size
    fontWeight: 'bold', // You can adjust the font weight as needed
    marginTop: 25
  },
});
