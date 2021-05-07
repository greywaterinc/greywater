// In App.js in a new project

import React, { useEffect } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SInfo from 'react-native-sensitive-info';
import GreetingScreen from './src/screens/Greeting'
import Briefing from './src/screens/Briefing'
import DashboardScreen from './src/screens/Dashboard';
import LoginScreen from './src/screens/Login';
import QRScreen from './src/screens/Onboard';
import Splash from './src/screens/Splash'
import DeviceFound from './src/screens/DeviceFound'
import OTPVerifcation from './src/screens/OTPVerification';
import Registration from './src/screens/Registration';
import DeviceTaken from './src/screens/DeviceTaken';
import NameDevice from './src/screens/NameDevice';
import { useAppDispatch, useAppState } from './src/contexts/app';
import TestScreen from './src/screens/TestScreen';
import ControlScreen from './src/screens/Controls';

library.add(fas);

const Stack = createStackNavigator();

function App() {
  const dispatch = useAppDispatch();
  const { initializing, authenticated } = useAppState();

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const token = await SInfo.getItem('refreshToken', {
          sharedPreferencesName: 'greywater-vault',
          keychainService: 'greywater-vault'
        });
        if(token!==undefined) {
          dispatch({ type: 'setAuthenticated' });
        }
        dispatch({ type: 'setInitialized' })
      } catch (error) {
        console.log(error)
      }
    }
    checkAuthentication()
  })


  if(initializing) {
    return (
      <Splash/>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
        }}>
        {
          authenticated ? (
            <>
              {/* <Stack.Screen name="Logging" component={TestScreen}/> */}
              <Stack.Screen name="Dashboard" component={DashboardScreen} />
              <Stack.Screen name="Controls" component={ControlScreen}/>
            </>
          ): (<>
            <Stack.Screen name="Onboard" component={Briefing} />
            <Stack.Screen name="QRScreen" component={QRScreen} />
            <Stack.Screen name="NameDevice" component={NameDevice} />
            <Stack.Screen name="Greeting" component={GreetingScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="DeviceTaken" component={DeviceTaken} />
            <Stack.Screen name="Registration" component={Registration} />
            <Stack.Screen name="OTPVerification" component={OTPVerifcation} />
            <Stack.Screen name="DeviceFound" component={DeviceFound} />
            <Stack.Screen name="Dashboard" component={DashboardScreen} />
          
          </>)
        }
            
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

export default App;