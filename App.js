// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas} from '@fortawesome/free-solid-svg-icons'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GreetingScreen from './src/screens/Greeting'
import OnboardScreen from './src/screens/Onboard'
import DashboardScreen from './src/screens/Dashboard';
import LoginScreen from './src/screens/Login';
import AppProvider from './src/contexts/app';

library.add(fas)

const Stack = createStackNavigator();

function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
          }}>
          <Stack.Screen name="Greeting" component={GreetingScreen} />
          <Stack.Screen name="Onboard" component={OnboardScreen} />
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}

export default App;