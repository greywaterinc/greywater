import React from "react"
import { View, StyleSheet, TouchableOpacity, Text } from "react-native"
import tailwind from "tailwind-rn"

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#374151',
    justifyContent: 'flex-end'
  },
  card: {
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: 'white',
    width: '100%',
    height: '75%'
  },
  something: {
    height: 56,
    width: 200,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginBottom: 16,
    marginLeft: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
})

function Dashboard() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        
      </TouchableOpacity>
      <TouchableOpacity style={styles.something}>
        <View style={{height: 8, width: 8, borderRadius: 4, backgroundColor: '#FBBF24', marginRight: 8}}></View>
        <Text style={tailwind('font-medium text-lg text-white')}>Mashiat Greywater</Text>
      </TouchableOpacity>
      <View style={styles.card}>
        
      </View>
    </View>
  )
}

export default Dashboard