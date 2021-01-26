import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const colors = ['#A5EE6C','#A5EE6C','#FACD61','#FACD61','#F595A4','#F595A4'];

const styles = StyleSheet.create({
  container: {
    height: 34, 
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },
  bar: { 
    height: '100%',  
    width: 10, 
    borderRadius: 5 
  },
  pointer: {
    position: 'absolute',
    bottom: -20, 
    right: -3, 
    color: '#606263' 
  }
});

function HealthBar({ status=0, width=160 }) {
  return (
    <View style={{...styles.container, width }}>
    {
      colors.map((color, index) => (
        <View key={index} style={{...styles.bar, backgroundColor: color}}>
          {
            index===status && (
              <FontAwesomeIcon icon={['fas', 'caret-up']} style={styles.pointer}/>
            )
          }
        </View>
      ))
    }
    </View>
  )
}

export default HealthBar;