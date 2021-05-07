import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image, Switch} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import tailwind from 'tailwind-rn';
import DashboardHeader from '../components/DashboardHeader';


const styles = StyleSheet.create({
    logo: {
      marginVertical: '10%',
      alignSelf: 'center',
      width: 76,
      height: 76,
    },
    tankBlock: {
      width: 170,
      height: 170,
      borderRadius: 12,
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingVertical: 30,
    },
    tankTitle: {
      color: '#494748',
      fontFamily: 'Inter',
      fontWeight: '700',
      fontSize: 21,
      textAlign: 'center',
    },
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: '#494748',
      justifyContent: 'flex-end',
    },
    card: {
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      backgroundColor: 'white',
      width: '100%',
      height: '70%',
      alignItems: 'center',
      paddingVertical: '8%',
    },
    tabMenuContainer: {
      ...tailwind('bg-gray-200 rounded-full'),
      padding: 8,
      justifyContent: 'space-between',
      flexDirection: 'row',
      marginHorizontal: 16,
      marginTop: 24,
      marginBottom: 12,
      height: 56,
    },
    activeSwitchTab: {
      backgroundColor: '#374151',
      ...tailwind('rounded-full h-10 w-40 absolute'),
    },
    smallerBoxStyle: {
      ...tailwind('bg-white'),
      width: 160,
      height: 160,
      borderRadius: 20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.075,
      shadowRadius: 7,
    },
    smallerBoxesContainer: {
      flexDirection: 'row',
      marginTop: 24,
      width: '90%',
      justifyContent: 'space-around',
    },
    wrecktangleCard: {
      ...tailwind('bg-white mt-5 p-5'),
      borderRadius: 20,
      width: '85%',
      height: '22%',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.075,
      shadowRadius: 7,
    },
  });

function ControlScreen(){
    const [isWaterCollected, setWaterCollected] = useState(false);
    const [isValveOpened, setValveOpened] = useState(false); 
    const [isProcessRestarted, setProcessRestarted] = useState(false);
    


    return (
        

          <View style={styles.container}>
            <Image
              source={require('../assets/images/logo.png')}
              style={styles.logo}
            />
            <DashboardHeader />
            <View style={styles.card}>
                <View style={tailwind('w-full items-center')}>
                        <Text style={tailwind('text-2xl text-center')}>

                            Settings

                        </Text>
                        <View style={tailwind('w-5/6 h-40 bg-gray-200 mt-4 rounded-2xl flex-row ')}>
                            <View style={tailwind('w-1/3 rounded-2xl p-4 mt-4')}>
                            <TouchableOpacity>

                            <Image
                                     source={require('../assets/images/power.png')}
                                     style={tailwind('')}
                                     />
                                        
                                    
                       </TouchableOpacity>

                            </View>
                            <View style={tailwind('w-2/3 bg-gray-200 rounded-2xl')}>
                                <Text style={tailwind('text-xl mt-8 ml-4 font-bold')}>

                                    Emergency Turn Off
                                </Text>
                                <Text style={tailwind('text-sm ml-4 mt-4 ')}>

                                Turn off Greywater if you think something is wrong. Proceed further to send us a report.
                                </Text>


                            </View>
                        </View>



                        <View style={tailwind('w-5/6 h-20 bg-gray-200 mt-4 rounded-2xl flex-row ')}>
                            <View style={tailwind('w-2/3 bg-gray-200')}>
                                <Text style={tailwind('mt-6 ml-4 text-lg font-bold')}>
                                    Collect Water from Storage Tank
                                </Text></View>
                            <View style={tailwind('w-1/3 items-center justify-center')}>

                               

                                 <Switch
                                trackColor={{ false: "#767577", true: "#45B17E" }}
                                thumbColor={isWaterCollected ? "#f4f4f4" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={() => setWaterCollected(!isWaterCollected)}
                                value={isWaterCollected}
                            />
                                                    


                            </View>

                            
                        </View>
                        
                        <View style={tailwind('w-5/6 h-20 bg-gray-200 mt-4 rounded-2xl flex-row ')}>
                            <View style={tailwind('w-2/3 bg-gray-200')}>
                                <Text style={tailwind('mt-6 ml-4 text-lg font-bold')}>
                                    Valve for collection tank
                                </Text></View>
                            <View style={tailwind('w-1/3 items-center justify-center')}>

                               

                                 <Switch
                                trackColor={{ false: "#767577", true: "#45B17E" }}
                                thumbColor={isValveOpened ? "#f4f4f4" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={() => setValveOpened(!isValveOpened)}
                                value={isValveOpened}
                            />              


                            </View>

                            
                        </View>

                        <View style={tailwind('w-5/6 h-20 bg-gray-200 mt-4 rounded-2xl flex-row ')}>
                            <View style={tailwind('w-2/3 bg-gray-200')}>
                                <Text style={tailwind('mt-6 ml-4 text-lg font-bold')}>
                                Restart water filtration process
                                </Text></View>
                            <View style={tailwind('w-1/3 items-center justify-center')}>

                               

                                 <Switch
                                trackColor={{ false: "#767577", true: "#45B17E" }}
                                thumbColor={isProcessRestarted ? "#f4f4f4" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={() => setProcessRestarted(!isProcessRestarted)}
                                value={isProcessRestarted}
                            />
                                                    


                            </View>

                            
                        </View>


                </View>

            

            </View>

            </View>

    )


}

export default ControlScreen