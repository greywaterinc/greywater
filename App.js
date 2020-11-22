// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas} from '@fortawesome/free-solid-svg-icons'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GreetingScreen from './src/screens/Greeting'
import OnboardScreen from './src/screens/Onboard'
import MonitorScreen from './src/screens/Monitor';
import LoginScreen from './src/screens/Login';

library.add(fas)

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
        }}>
        <Stack.Screen name="Greeting" component={GreetingScreen} />
        <Stack.Screen name="Onboard" component={OnboardScreen} />
        <Stack.Screen name="Monitor" component={MonitorScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;