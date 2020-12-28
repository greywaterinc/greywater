import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, StatusBar, SafeAreaView, ScrollView, TouchableOpacity, Dimensions } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { LineChart } from "react-native-chart-kit";
import ThresholdLevel from "../components/ThresholdLevel";

const styles = StyleSheet.create({
    appheader :  {
      flexDirection: 'row',
      marginHorizontal: 44,
      fontFamily: "Avenir",
      justifyContent: 'space-between'
    },
    staricon :{
      justifyContent: 'space-evenly',
      color: 'white',
    },
    circleforicon:{
      backgroundColor: '#9ae6b4',
      justifyContent: "center",
      alignItems: "center",
      width: 36,
      height: 36,
      borderRadius: 18,
    },
    tankstatuscard:{
      backgroundColor: 'white',
      marginVertical: 20,
      marginHorizontal: 20,
      height: 280,
      marginHorizontal: 30,
      borderRadius: 15,
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 20,
      },
      shadowOpacity: 0.10,
      shadowRadius: 7,
  
    }
  
  });

function AppHeader() {
    return (
        <TouchableOpacity style={styles.appheader}>
            <View>
            <Text style={{fontWeight: '500', fontSize: 20, fontFamily: 'Avenir'}}>
                Mashiat's Greywater
            </Text>
            </View>
            <FontAwesomeIcon icon={['fas', 'chevron-down']}/>
        </TouchableOpacity>
    )
}

function StarIcon() {
    return (
        <View style={styles.circleforicon}>
            <FontAwesomeIcon style={styles.staricon} icon={['fas', 'star']}/>
        </View>
    )
}

function TankStatusCard() {

    const [data, setData] = useState({
        labels: [7,6,5,4,3,2,1,0].map(hourToSubtract => { 
            const now = new Date();
            return hourToSubtract===0?"Current":now.getHours()-hourToSubtract
        }),
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
        <View style={styles.tankstatuscard}>
            <View style={{flexDirection: 'row', justifyContent: 'space-evenly', paddingVertical: 20}}>
                <StarIcon/>
                <Text style={{fontWeight: '900', fontSize: 16, fontFamily: 'Avenir'}}>
                    Sedimentation Tank
                </Text>
                <View>
                <Text style={{fontWeight: '500', fontSize: 20, fontFamily: 'Avenir'}}>
                    25* C
                </Text>
                </View>
            </View>
            <View style={{alignItems: 'center'}}>
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
                    style={{
                    marginVertical: 8,
                    borderRadius: 16
                    }}
                />
            </View>
        </View>
    )
}

function Monitor(){
    return (
        <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
            <AppHeader/>
            <ScrollView>
            {
                [1, 2, 3].map((i)=>(<TankStatusCard key={i}/>))
            }
            <View style={styles.tankstatuscard}>
                <ThresholdLevel/>
            </View>
            </ScrollView>

        </SafeAreaView>
        </>
    )
}

export default Monitor;