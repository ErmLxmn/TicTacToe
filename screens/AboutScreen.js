import { StyleSheet, Text, View, ScrollView, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import Logo from "../components/Logo";
import { useTranslation } from "react-i18next";

export default function AboutScreen() {
  const { t } = useTranslation();
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
          {t("aboutScreen")}
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
