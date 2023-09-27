import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  StatusBar, // Import StatusBar from react-native
} from "react-native";
import Logo from "../components/Logo";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTranslation } from "react-i18next";
import i18next from "../services/i18next";


export default function PlayerChoiceScreen({ navigation }) {
  const [playerSymbol, setPlayerSymbol] = useState(null);
  const { t } = useTranslation();

  const handleSymbolSelect = (symbol) => {
    setPlayerSymbol(symbol);
    navigation.navigate("RandomPlayerScreen", { playerSymbol: symbol });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/background/bg-1.jpg")}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <Logo />
        <Text style={styles.title}> { t("choose_symbol") }:</Text>
        <TouchableOpacity
          style={[
            styles.symbolButton,
            playerSymbol === "X" ? styles.selectedSymbol : {},
          ]}
          onPress={() => handleSymbolSelect("X")}
        >
          <Text style={styles.symbolText}>X</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.symbolButton,
            playerSymbol === "O" ? styles.selectedSymbol : {},
          ]}
          onPress={() => handleSymbolSelect("O")}
        >
          <Text style={styles.symbolText}>O</Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: "white", // Add text color to make it visible on the background
  },
  symbolButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#3f08a6",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  symbolText: {
    fontSize: 24,
    color: "white",
  },
});
