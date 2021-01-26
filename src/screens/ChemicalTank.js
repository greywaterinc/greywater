import React, { useRef, useEffect } from 'react'
import { Animated, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ViewPager from '@react-native-community/viewpager';
import VesselMarker from '../components/VesselMarker';
import TankStatusIndicator from '../components/TankStatusIndicator';
import { gql, useSubscription } from '@apollo/client'


const styles = StyleSheet.create({
  container: {
    width: '100%', 
    height: '100%', 
    paddingTop: '2%'
  },
  tankTitle: {
    fontFamily: 'Inter', 
    fontSize: 25, 
    fontWeight: '700', 
    color: '#606263'
  },
  waterLevelLayout: {
    backgroundColor: '#F1F1F1',
    width: '84%', 
    height: '92%', 
    borderRadius: 20, 
    marginTop: 16, 
    alignItems: 'center', 
    marginHorizontal: '8%' 
  },
  vessel: {
    backgroundColor: 'rgba(0,0,0, 0.025)', 
    height: '65%', 
    width: 96, 
    borderRadius: 25, 
    marginTop: '10%', 
    justifyContent: 'flex-end'
  },
  thresholdGradient: {
    borderRadius: 25
  },
  statusDescriptor: {
    width: '90%', 
    borderRadius: 20, 
    backgroundColor: 'rgba(196,196,196,0.2)', 
    height: '18%', 
    marginTop: 24, 
    alignItems: 'center', 
    flexDirection: 'row'
  },
  statusTankTitle: {
    fontFamily: 'Inter', 
    fontWeight: '700', 
    fontSize: 16, 
    color: '#606263'
  },
  statusTankDescription: {
    fontFamily: 'Inter', 
    fontSize: 13, 
    color: '#606263'
  }
})

const SUBSCRIBE_CHEMICAL_TANK = gql`
  subscription getDeviceStatus {
    deviceStatus(id: "gw01", tank: "chemical") {
      measurements {
        value
      }
    }
  }
`

function ChemicalTank() {

  const { data, loading, error } = useSubscription(SUBSCRIBE_CHEMICAL_TANK);
  const pagerRef = useRef(null);
  const growAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(growAnim, {
      toValue: 200,
      duration: 600,
      useNativeDriver: false
    }).start();
  }, [])

  return (
    <View style={styles.container}>
      <View style={{borderRadius: 20, width: '100%', height: '8%', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.tankTitle}>Chemical Tank</Text>
      </View>
      <ViewPager style={{ width: '100%', height: '100%' }} ref={pagerRef}>
        <View style={{ flex: 1 }} key="1">
          <View style={styles.waterLevelLayout}>
            <View style={styles.vessel}>
              <VesselMarker />
              <LinearGradient
                colors={['#ECE9AD', '#9ABFAB']}
                start={{x: 0.5, y: 0}} end={{x: 0.5, y: 1}}
                style={styles.thresholdGradient}>
                <Animated.View style={[{width: '100%'}, { height: growAnim }]}/>
              </LinearGradient>
            </View>
            <TouchableOpacity 
              onPress={() => grow()}
              style={styles.statusDescriptor}>
              {
                !loading && (
                  <>
                    <TankStatusIndicator status={data.deviceStatus.measurements[0]['value']}/>
                    <View>
                      <Text style={styles.statusTankTitle}>Water Level</Text>
                      <Text style={styles.statusTankDescription}>{data.deviceStatus.measurements[0]['value']==='HIGH'?'Good chemical level':'Chemical level is low,\nContact your admin for support'}</Text>
                    </View>
                  </>
                )
              }
            </TouchableOpacity>
          </View>
        </View>
      </ViewPager>
    </View>
  )
}

export default ChemicalTank;