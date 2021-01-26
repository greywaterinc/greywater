import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  splashScreenBg: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 150,
    height: 150
  },
  brandText: {
    marginTop: 16,
    fontSize: 32,
    fontFamily: 'Inter',
    fontWeight: "900",
    color: '#fff'
  }
})

function Splash({ navigation }) {
  return (
    <LinearGradient colors={['#959595', '#282829']} start={{x: 0, y: 0}} end={{x: 1, y: 1}}>
      <View style={styles.splashScreenBg}>
        <Image source={require('../assets/images/logo.png')} style={styles.logo}/>
        <Text style={styles.brandText}>Greywater</Text>
      </View>
    </LinearGradient>
  )
}

export default Splash;