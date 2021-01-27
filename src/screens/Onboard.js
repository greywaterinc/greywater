import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import LottieView from 'lottie-react-native';
// import QRCodeScanner from 'react-native-qrcode-scanner';
// import { RNCamera } from 'react-native-camera';

const style = StyleSheet.create({
  logo: {
    marginTop: '30%',
    alignSelf: 'center',
    width: 76,
    height: 76,
  },
  linearGradient: {
    width: '100%',
    height: '30%',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    borderRadius: 24,
    paddingHorizontal: 16
  },
  scanInstructionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3a3a3a',
    marginVertical: 36
  },
  cameraBlock: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
    backgroundColor: '#fefefe',
    borderRadius: 24,
    shadowColor: '#e4e4e4',
    shadowOpacity: 0.5,
    shadowOffset: { width: 1, height: 3 },
    shadowRadius: 5
  }
})

function QRScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
        <LinearGradient
          colors={['#45EEC1','#31D8AC']}
          start={{x: 1.0, y: 0.3}}
          end={{x: 0.0, y: 1.0}}
          locations={[0, 0.8]} style={style.linearGradient}
        >
          <Image
            source={require('../assets/images/logo.png')}
            style={style.logo}
          />
        </LinearGradient>
        <Text style={style.scanInstructionTitle}>Scan QR Code</Text>
        <View style={style.cameraBlock}>
          <LottieView style={{ height: 'auto', width: '100%'}} source={require('../assets/animations/scan.json')} autoPlay loop />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('DeviceFound')}>
          <View style={{ width: 56, height: 56, borderRadius: 28, backgroundColor: '#31D8AC',borderColor: '#45EEC1', borderWidth: 4, alignItems: 'center', justifyContent: 'center', marginTop: 48}}>
            <FontAwesomeIcon icon={['fas', 'expand']} size={28} color="#fff" />
          </View>
        </TouchableOpacity>

      </View>
    );
  }
  export default QRScreen;