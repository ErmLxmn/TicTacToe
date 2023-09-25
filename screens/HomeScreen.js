import React, { useRef, useEffect } from "react";
import { StyleSheet, ImageBackground, Text, TouchableOpacity, View, Animated } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../components/Logo";

export default function HomeScreen({ navigation }) {
  const scaleValue = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const scaleIn = Animated.timing(scaleValue, {
      toValue: 1.2, // Scale up to 1.2 times the original size
      duration: 1000, // Animation duration (adjust as needed)
      useNativeDriver: true,
    });

    const scaleOut = Animated.timing(scaleValue, {
      toValue: 1, // Scale back to the original size
      duration: 1000, // Animation duration (adjust as needed)
      useNativeDriver: true,
    });

    const animateLoop = Animated.sequence([scaleIn, scaleOut]);

    const loop = Animated.loop(animateLoop);
    loop.start(); // Start the animation loop

    return () => {
      loop.stop(); // Stop the animation loop when the component unmounts
    };
  }, []);

  // Define a function to navigate to a specific screen when a button is pressed
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/background/bg-1.jpg")}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <Logo />

        {/* Centered Button Container */}
        <View style={styles.centeredContainer}>
          <View style={styles.buttonContainer}>
            <Animated.View style={[styles.button, { transform: [{ scale: scaleValue }] }]}>
              <TouchableOpacity
                onPress={() => navigateToScreen("PlayerChoiceScreen")}
              >
                <Text style={styles.buttonText}>Play Game</Text>
              </TouchableOpacity>
            </Animated.View>

            <Animated.View style={[styles.button, { transform: [{ scale: scaleValue }] }]}>
              <TouchableOpacity
                onPress={() => navigateToScreen("HowToPlayScreen")}
              >
                <Text style={styles.buttonText}>How To Play</Text>
              </TouchableOpacity>
            </Animated.View>

            <Animated.View style={[styles.button, { transform: [{ scale: scaleValue }] }]}>
              <TouchableOpacity
                onPress={() => navigateToScreen("SettingsScreen")}
              >
                <Text style={styles.buttonText}>Settings</Text>
              </TouchableOpacity>
            </Animated.View>
            <Animated.View style={[styles.button, { transform: [{ scale: scaleValue }] }]}>
              <TouchableOpacity
                onPress={() => navigateToScreen("AboutScreen")}
              >
                <Text style={styles.buttonText}>About</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        </View>
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
  centeredContainer: {
    flex: 1,
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
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
    textAlign: 'center'
  },
});
