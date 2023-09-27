import React, { useRef, useEffect, useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Modal,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../components/Logo";
import { useTranslation } from "react-i18next";
import i18next from "../services/i18next";
import translations from "../services/translations.json";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function HomeScreen({ navigation }) {
  const scaleValue = useRef(new Animated.Value(1)).current;
  const { t } = useTranslation();
  const [isVisible, setVisible] = useState(false);
  const [language, setLanguage] = useState('')

  useEffect(()=> { getData() }, [])

  useEffect(() => {
    // Prevent the splash screen from auto-hiding
    SplashScreen.preventAutoHideAsync()
      .then((result) => {
        // Add a delay of 2000 milliseconds (2 seconds)
        setTimeout(() => {
          // Manually hide the splash screen
          SplashScreen.hideAsync()
            .catch(console.error);
        }, 2000); // Adjust the delay time as needed
      })
      .catch(console.error);
  }, []);
  useEffect(() => {
    const scaleIn = Animated.timing(scaleValue, {
      toValue: 1.2,
      duration: 1000,
      useNativeDriver: true,
    });

    const scaleOut = Animated.timing(scaleValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    });

    const animateLoop = Animated.sequence([scaleIn, scaleOut]);

    const loop = Animated.loop(animateLoop);
    loop.start();

    return () => {
      loop.stop();
    };
  }, []);

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  const handleLanguageChange = (language) => {
    i18next.changeLanguage(language);
    storeData(language)
    setLanguage(language)
    setVisible(false); // Close the language selection modal
  };

  const getData = async () => {
    try {
      const lan = await AsyncStorage.getItem('language');
      if(lan !== null){
        setLanguage(lan)
        handleLanguageChange(lan)
      }
    } catch (e) {
    }
  };

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('language', value);
    } catch (e) {
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/background/bg-1.jpg")}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <Logo />
        <View style={styles.centeredContainer}>
          <View style={styles.buttonContainer}>
            <Animated.View
              style={[styles.button, { transform: [{ scale: scaleValue }] }]}
            >
              <TouchableOpacity
                onPress={() => navigateToScreen("PlayerChoiceScreen")}
              >
                <Text style={styles.buttonText}>{t("play_game")}</Text>
              </TouchableOpacity>
            </Animated.View>

            <Animated.View
              style={[styles.button, { transform: [{ scale: scaleValue }] }]}
            >
              <TouchableOpacity
                onPress={() => navigateToScreen("HowToPlayScreen")}
              >
                <Text style={styles.buttonText}>{t("how_to_play")}</Text>
              </TouchableOpacity>
            </Animated.View>

            <Animated.View
              style={[styles.button, { transform: [{ scale: scaleValue }] }]}
            >
              <TouchableOpacity onPress={() => setVisible(true)}>
                <Text style={styles.buttonText}>{t("language")}</Text>
              </TouchableOpacity>
            </Animated.View>

            <Animated.View
              style={[styles.button, { transform: [{ scale: scaleValue }] }]}
            >
              <TouchableOpacity onPress={() => navigateToScreen("AboutScreen")}>
                <Text style={styles.buttonText}>{t("about")}</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        </View>
      </ImageBackground>

      <Modal
        visible={isVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setVisible(false)}>
          <View style={styles.modalContainer}>
            <TouchableWithoutFeedback onPress={() => null}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Choose a Language</Text>
                <FlatList
                  data={Object.keys(translations)} // Use translations object keys
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      onPress={() => handleLanguageChange(item)}
                    >
                      <Text style={styles.languageText}>
                        {translations[item].name}
                      </Text>
                    </TouchableOpacity>
                  )}
                />
                <TouchableOpacity onPress={() => setVisible(false)}>
                  <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
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
  centeredContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#3f08a6",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 30,
    width: 150,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  modalTitle: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: "center",
  },
  languageText: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
  },
  closeButtonText: {
    fontSize: 18,
    color: "blue",
    textAlign: "center",
  },
});
