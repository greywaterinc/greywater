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

function DeviceTaken() {
  return (
    <View style={styles.container}>
      <SafeAreaView >
        <Image 
          style={styles.illustration}
          source={require('../assets/images/notFound.png')}/>
        <View style={styles.card}>
          <Text style={styles.messageTitle}>
            Sorry! This greywater has already been registered.
          </Text>
          <Text style={styles.messageSubtitle}>
            Please contact an admin for further assistance or login if you
            already have an account.
          </Text>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Continue</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default DeviceTaken;