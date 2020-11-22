/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect,useState } from 'react';


import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MQTT from 'sp-react-native-mqtt';
const serverName = 'mqtt://greywater.mashiat.live:1883'

const AppHeader = () => {
  return(
    <TouchableOpacity style={styles.appheader}>
      <View>
        <Text style={{fontWeight: '500', fontSize: 20, fontFamily: 'Avenir'}}>
          Mashiat's Greywater
        </Text>
      </View>
      <FontAwesomeIcon icon={faChevronDown}/>
    </TouchableOpacity>
  ) 
}
const StarIcon =()=>{
  return(
    <View style={styles.circleforicon}>
      <FontAwesomeIcon style={styles.staricon} icon={faStar}/>
    </View>


  )


}
const TankStatusCard = ()=>{
  return(
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
    </View>
  )
}

export { AppHeader };

const App = () => {

  useEffect(() => {
    MQTT.createClient({
        uri: serverName,
        clientId: 'mashiat'
      }).then(function (client) {
        client.on('error', function(msg) {
          console.log('mqtt.event.error', msg);
        });
        client.on('message', function (message){
          console.log(message)
        });
        client.on('connect', function() {
          console.log('connected to'+serverName);
          client.subscribe('GW/MAC0', 0);
         // client.publish('/mashiat', "hallo", 0, false);
        });
        client.connect();
      }).catch(err => {
          console.log(err)
      })
  })

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <AppHeader/>
        <ScrollView>
        {
          [1, 2, 3].map((i)=>(<TankStatusCard key={i}/>))
        }
        </ScrollView>

      </SafeAreaView>
    </>
  );
};

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
    height: 200,
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

export default App;
