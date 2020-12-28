import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from "react-native";
import { LineChart, BarChart } from "react-native-chart-kit";
import { ScrollView } from "react-native-gesture-handler";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import tailwind from "tailwind-rn";
const styles = StyleSheet.create({
  smallerBoxStyle: {...tailwind('bg-white'),
  marginHorizontal: 22,
  width: 370,
  height: 120,
  borderRadius: 20,
  shadowColor: "#000",
  shadowOffset: {
      width: 0,
      height: 3,
  },
  shadowOpacity: 0.075,
  shadowRadius: 7
},
  wrecktangleCard: {    
    ...tailwind('bg-white mt-5 p-5'),
        borderRadius: 20,
        width: '85%',
        height: '16%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.075,
        shadowRadius: 7,}
  },
)

function HealthBar({ status=0, width=160, enabledMargin=true, magicNumber=0 }) {
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
      <View style={{ marginLeft: 41.5+(magicNumber*status) }}>
      <FontAwesomeIcon icon={['fas', 'caret-down']} transform={{ rotate: 180 }}/>
      <Text style={tailwind('font-bold mb-2')}>30</Text>
      </View>
    </View>
  )
}

function MetricStatusDetail({ route }) {
  const { type, viewingTank } = route.params;
  const barChartData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43]
      }
    ]
  };
  const [data, setData] = useState({
    labels: [7,6,5,4,3,2,1,0].map(hourToSubtract => { 
        const now = new Date();
        return hourToSubtract===0?"Current":now.getHours()-hourToSubtract
    }),
    legend: ["Temperature"],
    datasets: [
        {
        data: [
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10
        ]
        }
    ]
    })

  return (
    <SafeAreaView style={{backgroundColor: '#374151', height: '100%'}}>
      <Text style={tailwind('text-white font-bold text-3xl ml-6 mt-6')}>{type}</Text>
      <Text style={tailwind('text-white text-base text-gray-400 ml-6 mt-2')}>{viewingTank}</Text>
      <View style={{alignItems: 'center', marginTop: 30, backgroundColor: 'white', paddingHorizontal: 40, paddingVertical: 20, margin: 24, borderRadius: 16}}>
                <LineChart
                    data={data}
                    withDots={false}
                    width={340} // from react-native
                    height={180}
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                      
                    backgroundColor: "#fff",
                    backgroundGradientFrom: "#fff",
                    backgroundGradientTo: "#fff",
                    fillShadowGradient: "#3DD598",
                    fillShadowGradientOpacity: 1,
                    decimalPlaces: 1, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(97, 97, 97, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(97, 97, 97, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#ffa726"
                    }
                    }}
                    bezier
                />
      </View>
      <TouchableOpacity style={
              styles.smallerBoxStyle
            }
            onPress={()=> navigation.navigate('MetricDetail', { type: 'Water Level', viewingTank})}
            >
              <View style ={tailwind('flex-row justify-between p-5')}>
              
                <View>
                <Text style ={tailwind('font-bold text-gray-700 text-lg')}>Average Temperature</Text>
                
                {/* <View style={{height: 90, width: 100}}>
                <View style={tailwind('w-1/2 h-2 mt-8 bg-gray-300 rounded-full')}>
                  
                </View>
              </View>  */}
              
                </View>
                
                <View style = {tailwind('justify-center')}>
                  
                <Text style = {tailwind('font-bold text-gray-500 font-medium')}> Week 2, January</Text>
              </View>
              </View>
              <HealthBar status={4} width={'100%'} enabledMargin={false} magicNumber={27}/>

            </TouchableOpacity>


      <View style={{alignItems: 'center', marginTop: 30, backgroundColor: 'white', paddingHorizontal: 40, paddingVertical: 20, margin: 24, borderRadius: 16}}>
      <ScrollView directionalLockEnabled={true}>
      <BarChart
        data={barChartData}
        width={340}
        height={250}
        chartConfig={{
          backgroundColor: "#fff",
                    backgroundGradientFrom: "#fff",
                    backgroundGradientTo: "#fff",
                    fillShadowGradient: "#0E6BA8",
                    fillShadowGradientOpacity: 1,
                    decimalPlaces: 1, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(97, 97, 97, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(97, 97, 97, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#ffa726"
                    }
                    
        }}
        verticalLabelRotation={30}
      />
      </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default MetricStatusDetail