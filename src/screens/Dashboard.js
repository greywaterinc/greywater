import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import React from "react"
import { View, StyleSheet, TouchableOpacity, Text, ScrollView } from "react-native"
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
    height: '75%',
    alignItems: 'center' 
  },
  tabMenuContainer: {
    ...tailwind('bg-gray-200 rounded-full'),
    padding: 8,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 16,
    marginTop: 24,
    height: 56
  },
  something: {
    height: 56,
    width: 200,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  smallerBoxStyle: {...tailwind('bg-white'),
    width: 160,
    height: 160,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.075,
    shadowRadius: 7
  },
  smallerBoxesContainer: { flexDirection: 'row', marginTop: 24, width: '90%', justifyContent: 'space-around' },
  wrecktangleCard: {    
        
    ...tailwind('bg-white mt-5 h-40 p-5'),
        borderRadius: 20,
        width: '85%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.075,
        shadowRadius: 7,}
  },
)

function Dashboard() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 18, marginBottom: 16 }}>
        <TouchableOpacity style={styles.something}>
          <View style={{height: 8, width: 8, borderRadius: 4, backgroundColor: '#FBBF24', marginRight: 8}}></View>
          <Text style={tailwind('font-medium text-lg text-white')}>Mashiat Greywater</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={{...tailwind('h-12 w-12 rounded-full justify-center items-center'), backgroundColor: 'rgba(255, 255, 255, 0.1)'}}>
            <FontAwesomeIcon style={{color: 'white'}} icon={['fas', 'bell']} size={18}/>
          </TouchableOpacity>
          <TouchableOpacity style={{...tailwind('ml-2 h-12 w-12 rounded-full justify-center items-center'), backgroundColor: 'rgba(255, 255, 255, 0.1)'}}>
            <FontAwesomeIcon style={{color: 'white'}} icon={['fas', 'cog']} size={18}/>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.card}> 
        <View style={styles.tabMenuContainer}>
          <TouchableOpacity style={{...tailwind('px-6 py-2 rounded-full h-10 justify-center items-center flex-row flex-1'), backgroundColor: '#374151'}}>
            <FontAwesomeIcon style={tailwind('text-white')} icon={['fas', 'chart-pie']}/>
            <Text style={tailwind('ml-2 text-white font-bold')}>Status</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tailwind('px-6 py-2 h-10 justify-center items-center flex-row flex-1')}>
            <FontAwesomeIcon style={{color: '#374151'}} icon={['fas', 'sliders-h']}/>
            <Text style={{...tailwind('ml-2 font-bold'),color: '#374151'}}>Control</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.wrecktangleCard}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Text style={tailwind('font-bold text-gray-700 text-xl')}>Temperature</Text>
                <Text style={tailwind('text-gray-500 text-sm mt-2')}>Last checked 5 minutes ago</Text>
                <View style={{height: 80}}>
                  <View style={tailwind('w-full h-2 mt-8 bg-gray-300 rounded-full')}>
                    <View style={tailwind('w-1/2 bg-green-400 h-2 rounded-full')}></View>
                  </View>
                </View>
              </View>
              <View style={tailwind('justify-center')}>
                <Text style={tailwind('mt-8 font-bold text-gray-700 text-3xl')}>45 ℃</Text>
              </View>
            </View>
        </View>
        
        <View style={styles.smallerBoxesContainer}>
          <View style={ 
            styles.smallerBoxStyle
          }>

          </View> 
          <View style={
            styles.smallerBoxStyle
          }>
          </View>



          
        </View>

        <View style ={styles.smallerBoxesContainer}>
          <View style={
            styles.smallerBoxStyle
          }>

          </View>
          <View style={
            styles.smallerBoxStyle
          }>
            
          </View>
        </View>
      </View>
    </View>
  )
}

export default Dashboard