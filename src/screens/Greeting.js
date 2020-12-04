import * as React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Image,
    TouchableOpacity,
    View,
    Text,
    StatusBar
  } from 'react-native';
import LottieView from 'lottie-react-native';
import tailwind from 'tailwind-rn';

const styles = StyleSheet.create({
  getStartedButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#3B82F6',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 5,
    },
    shadowOpacity: 0.10,
    shadowRadius: 7,
  }
})
function GreetingScreen({navigation}){
    return (
        <>
          <StatusBar barStyle="light-content"/>
          <View style={{backgroundColor: '#374151', width: '100%', height: '50%', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{...tailwind('font-bold text-white text-2xl tracking-widest'), fontFamily: 'Avenir'}}>GREYWATER</Text>
          </View>
          <LottieView style={{ height: 'auto', width: '100%'}} source={require('../assets/animations/wave2.json')} autoPlay loop />
          {/* <LottieView style={{ height: 'auto', width: '100%'}} source={require('../assets/animations/wave2.json')} autoPlay loop /> */}
          <View style={{backgroundColor: 'white', width: '100%', height: '50%', alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity style={styles.getStartedButton} onPress={()=> navigation.navigate('Dashboard')}>
              <Text style={{...tailwind('font-bold text-base text-white uppercase tracking-wider'), fontFamily: 'Avenir'}}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </>
      );
}
export default GreetingScreen;