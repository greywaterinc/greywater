import React from 'react'
import { View, StyleSheet, Image, SafeAreaView, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F6F6F7',
    flex: 1
  },
  illustration: {
    marginTop: 44
  },
  card: {
    backgroundColor: '#fff',
    justifyContent: 'space-evenly',
    borderRadius: 8,
    height: '45%',
    marginHorizontal: '6%',
    padding: 20,
    alignItems: 'center'
  },
  messageTitle: {
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 25,
    fontWeight: '600'
  },
  messageSubtitle: {
    fontFamily: 'Inter',
    fontSize: 15,
    color: '#8A8A8F'
  },
  actionButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6585DD',
    height: 44,
    width: 240,
    borderRadius: 22
  },
  actionButtonText: {
    color: '#fff',
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 15
  }
})

function DeviceFound({ navigation }) {
  return (
    <View style={styles.container}>
      <SafeAreaView >
        <Image 
          style={styles.illustration}
          source={require('../assets/images/deviceFound.png')}/>
        <View style={styles.card}>
          <Text style={styles.messageTitle}>
            A new greywater has been found!
          </Text>
          <Text style={styles.messageSubtitle}>
            You’re on the way to saving a lot of water.
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Registration')} style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default DeviceFound;