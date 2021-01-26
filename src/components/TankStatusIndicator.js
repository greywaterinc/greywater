import React from 'react'
import { View, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const styles = StyleSheet.create({
  outterCircle: {
    marginHorizontal: 16, 
    width: 48, 
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  innerCircle: {
    width: 32, 
    height: 32, 
    borderRadius: 16, 
    justifyContent: 'center', 
    alignItems: 'center'
  }
})

function TankStatusIndicator({ status }) {
  const outterRimColor = status==='HIGH'?'#6FCF97':'#F67D90'
  const innerCircleColor = status==='HIGH'?'#219653': '#D75252'
  const icon = status==='HIGH'?'check':'exclamation'
  return (
    <View style={{...styles.outterCircle, backgroundColor: outterRimColor }}>
      <View style={{...styles.innerCircle, backgroundColor: innerCircleColor }}>
        <FontAwesomeIcon icon={['fas', icon]} style={{color: '#fff'}}/>
      </View>
    </View>
  )
}

export default TankStatusIndicator;