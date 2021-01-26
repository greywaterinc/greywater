import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  layout: {
    position: 'absolute',
    width: '100%',
    height: '60%',
    top: 56,
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
    zIndex: 1000
  },
  level: {
    width: 16,
    height: 1, 
    backgroundColor: '#606263'
  }
})

function VesselMarker() {
  return (
    <View style={styles.layout}>
      <View style={styles.level}></View>
      <View style={styles.level}></View>
      <View style={styles.level}></View>
      <View style={styles.level}></View>
    </View>
  )
}

export default VesselMarker