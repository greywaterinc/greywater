import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import React, {useState} from "react"
import { View, ActionSheetIOS, StyleSheet, TouchableOpacity, Text, ScrollView, Dimensions } from "react-native"
import Animated, { useSharedValue, useAnimatedStyle, withSpring, runOnJS } from 'react-native-reanimated';
import tailwind from "tailwind-rn"
import DashboardHeader from "../components/DashboardHeader"


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
    alignItems: 'center',
  },
  tabMenuContainer: {
    ...tailwind('bg-gray-200 rounded-full'),
    padding: 8,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 16,
    marginTop: 24,
    marginBottom: 12,
    height: 56
  },
  activeSwitchTab: {
    backgroundColor: '#374151',
    ...tailwind('rounded-full h-10 w-40 absolute')
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
    ...tailwind('bg-white mt-5 p-5'),
        borderRadius: 20,
        width: '85%',
        height: '22%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.075,
        shadowRadius: 7,}
  },
)

function HealthBar({ status=1, width=160, enabledMargin=true }) {
  return (
    <View >
      <View style={{marginTop: enabledMargin?40:0, height: 24, width, flexDirection: 'row', justifyContent: 'space-evenly'}}>
      {
        ['green','green','yellow','yellow','red','red'].map((color, index) => (
          <View key={index} style={{ height: '100%', ...tailwind(`w-2 bg-${color}-400 rounded-full`)}}>

          </View>
        ))
      }
      </View>
      <FontAwesomeIcon style={{ marginLeft: 11+(24.2*status) }} icon={['fas', 'caret-down']} transform={{ rotate: 180 }}/>
    </View>
  )
}

function Dashboard({ navigation }) {

  const offset = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => runOnJS(() => {
    return {
      transform: [{ translateX: withSpring(offset.value) }],
    };
  }));

  const tankOptions = ["Chemical Tank", "Ozone Contact Tank", "ICEAS Tank", "Collection Tank", "Storage Tank"]
  const [viewingTank, selectViewingTank] = useState ("Sedimentation Tank")
  const chooseTank = () => {
    ActionSheetIOS.showActionSheetWithOptions ({
      cancelButtonIndex: 0, 
      options: ["Cancel", ...tankOptions]

    }, buttonChosen => {
      if(buttonChosen!=0) {
        selectViewingTank(tankOptions[buttonChosen-1])
      }
      console.log(tankOptions[buttonChosen-1])
    })
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        
      </TouchableOpacity>
      <DashboardHeader/>
        <View style={styles.card}> 
          <View style={styles.tabMenuContainer}>
            <Animated.View style={[styles.activeSwitchTab, animatedStyles]}/>
            <TouchableOpacity
              style={{...tailwind('flex-1')}}
              onPress={() =>  (offset.value = 0)}
              >
              <FontAwesomeIcon style={tailwind('text-white')} icon={['fas', 'chart-pie']}/>
              <Text style={tailwind('ml-2 text-white font-bold')}>Status</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={tailwind('flex-1')}
              onPress={() =>  (offset.value = 200)}
              >
              <FontAwesomeIcon style={{color: '#374151'}} icon={['fas', 'sliders-h']}/>
              <Text style={{...tailwind('ml-2 font-bold'),color: '#374151'}}>Control</Text>
            </TouchableOpacity>
          </View>
          {/* <FlatList
            style={{ maxHeight: 36 }}
            horizontal={true}
            data={tankOptions}
            snapToAlignment={"start"} 
            decelerationRate={"fast"}
            pagingEnabled={true}
            snapToInterval={windowWidth}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (<Text style={{...tailwind('text-center font-bold text-gray-700'), width: windowWidth}}>{item}</Text>)}
          /> */}
          <TouchableOpacity onPress={chooseTank} style={{...tailwind('bg-blue-100 rounded-lg px-24 h-10 justify-center items-center'), marginHorizontal: 16}}>
            <Text style={tailwind('text-blue-600 font-bold')}>{viewingTank}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.wrecktangleCard} onPress={()=> navigation.navigate('MetricDetail', { type: 'Temperature', viewingTank })}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                  <Text style={tailwind('font-bold text-gray-700 text-xl ml-4')}>Temperature</Text>
                 {/* <Text style={tailwind('text-gray-500 text-sm mt-2')}>1 hr</Text>  */}
                  <HealthBar status={2}/>
                </View>
                <View style={tailwind('justify-center')}>
                  <Text style={tailwind('mt-8 font-bold text-gray-700 text-3xl')}>45 ℃</Text>
                </View>
              </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.wrecktangleCard} onPress={()=> navigation.navigate('MetricDetail', { type: 'Temperature', viewingTank })}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                  <Text style={tailwind('font-bold text-gray-700 text-xl ml-4')}>pH</Text>
                 {/* <Text style={tailwind('text-gray-500 text-sm mt-2')}>1 hr</Text>  */}
                  <HealthBar status={1}/>
                </View>
                <View style={tailwind('justify-center')}>
                  <Text style={tailwind('mt-8 font-bold text-gray-700 text-3xl')}>4.6</Text>
                </View>
              </View>
          </TouchableOpacity>

          

          <TouchableOpacity style={styles.wrecktangleCard} onPress={()=> navigation.navigate('MetricDetail', { type: 'Temperature', viewingTank })}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                  <Text style={tailwind('font-bold text-gray-700 text-xl ml-4')}>Water Level</Text>
                 {/* <Text style={tailwind('text-gray-500 text-sm mt-2')}>1 hr</Text>  */}
                  <HealthBar status ={5}/>
                </View>
                <View style={tailwind('justify-center')}>
                  <Text style={tailwind('mt-8 font-bold text-gray-700 text-3xl')}>25%</Text>
                </View>
              </View>
          </TouchableOpacity>
          
          <View style={styles.smallerBoxesContainer}>
            <TouchableOpacity style={ 
              {...styles.smallerBoxStyle}
            }
            onPress={()=> navigation.navigate('MetricDetail', { type: 'pH', viewingTank })}>
             
              <View style={tailwind( 'flex-row justify-between p-5')}>
            
                <View>
                <Text style={tailwind('font-bold text-gray-700 text-lg')}>pH</Text>
                
                <View style={{height: 90, width: 100}}>
                  <View style={tailwind('w-1/2 h-2 mt-8 bg-gray-300 rounded-full')}>
                    <View style = {tailwind('w-1/2 bg-yellow-400 h-2 rounded-full')}>
                    </View>
                  </View>
                </View> 
                </View>
                <View style={tailwind('justify-center')}>
                  <Text style={tailwind('font-bold text-gray-700 text-lg')}> 7.0</Text>
                </View>
              
              </View>
            </TouchableOpacity> 
            <TouchableOpacity style={
              styles.smallerBoxStyle
            }
            onPress={()=> navigation.navigate('MetricDetail', { type: 'Water Level', viewingTank})}
            >
              <View style ={tailwind('flex-row justify-between p-5')}>
                <View>
                <Text style ={tailwind('font-bold text-gray-700 text-lg')}>Water Level</Text>
                
                <View style={{height: 90, width: 100}}>
                <View style={tailwind('w-1/2 h-2 mt-8 bg-gray-300 rounded-full')}>
                  <View style = {tailwind('w-1/2 bg-red-400 h-2 rounded-full')}>

                  </View>
                </View>
              </View> 
                </View>
                <View style = {tailwind('justify-center')}>
                <Text style = {tailwind('font-bold text-gray-700 text-lg')}> 40%</Text>
              </View>
              </View>
              
            </TouchableOpacity>



            
          </View>
        </View>
    </View>
  )
  
}

export default Dashboard