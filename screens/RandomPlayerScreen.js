import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useTranslation } from "react-i18next";

export default function RandomPlayerScreen({ route, navigation }) {
  const { playerSymbol } = route.params;
  const cpuSymbol = playerSymbol === 'X' ? 'O' : 'X';
  const { t } = useTranslation();

  useEffect(() => {
    setTimeout(() => {
      const randomChoice = Math.random() < 0.5 ? 'player' : 'cpu';
      if (randomChoice === 'player') {
        // Player goes first
        navigation.navigate('GameScreen', { playerSymbol, cpuSymbol, randomChoice });
      } else {
        // CPU goes first
        navigation.navigate('GameScreen', { playerSymbol, cpuSymbol, randomChoice });
      }
    }, 1000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
    <ImageBackground
      source={require("../assets/background/bg-1.jpg")}
      resizeMode="cover"
      style={styles.backgroundImage}
    >
     
        <Text style={styles.title}>{t("loading")}.....</Text>
      
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
    width: '100%', // Cover the entire width of the screen
    height: '100%', // Cover the entire height of the screen
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    color: 'white',
  },
});
