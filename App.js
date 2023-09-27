import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import HowToPlayScreen from './screens/HowToPlayScreen';
import GameScreen from './screens/GameScreen';
import SettingsScreen from './screens/SettingsScreeen';
import AboutScreen from './screens/AboutScreen';
import PlayerChoiceScreen from './screens/PlayerChoiceScreen';
import RandomPlayerScreen from './screens/RandomPlayerScreen';
const Stack = createStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="HowToPlayScreen" component={HowToPlayScreen}  options={{ headerShown: false }} />
      <Stack.Screen name="GameScreen" component={GameScreen}  options={{ headerShown: false }} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen}  options={{ headerShown: false }} />
      <Stack.Screen name="AboutScreen" component={AboutScreen}  options={{ headerShown: false }} />
      <Stack.Screen name="PlayerChoiceScreen" component={PlayerChoiceScreen}  options={{ headerShown: false }} />
      <Stack.Screen name="RandomPlayerScreen" component={RandomPlayerScreen}  options={{ headerShown: false }} />
    </Stack.Navigator>
    <StatusBar style='auto'></StatusBar>
  </NavigationContainer>
  );
}

