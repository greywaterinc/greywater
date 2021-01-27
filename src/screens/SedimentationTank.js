import React, {useRef, useEffect, useState} from 'react';
import {
  Animated,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {LineChart} from 'react-native-chart-kit';
import ViewPager from '@react-native-community/viewpager';
import VesselMarker from '../components/VesselMarker';
import TankStatusIndicator from '../components/TankStatusIndicator';
import HealthBar from '../components/HealthBar';
import moment from 'moment';
import { useAnimation } from 'react-native-animation-hooks'
import { useSubscription, gql } from '@apollo/client'


const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingTop: '2%',
  },
  tankTitle: {
    fontFamily: 'Inter',
    fontSize: 25,
    fontWeight: '700',
    color: '#606263',
  },
  waterLevelLayout: {
    backgroundColor: '#F1F1F1',
    width: '84%',
    height: '92%',
    borderRadius: 20,
    marginTop: 16,
    alignItems: 'center',
    marginHorizontal: '8%',
  },
  vessel: {
    backgroundColor: 'rgba(0,0,0, 0.025)',
    height: '65%',
    width: 96,
    borderRadius: 25,
    marginTop: '10%',
    justifyContent: 'flex-end',
  },
  thresholdGradient: {
    borderRadius: 25,
  },
  statusDescriptor: {
    width: '90%',
    borderRadius: 20,
    backgroundColor: 'rgba(196,196,196,0.2)',
    height: '18%',
    marginTop: 24,
    alignItems: 'center',
    flexDirection: 'row',
  },
  statusTankTitle: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 16,
    color: '#606263',
  },
  statusTankDescription: {
    fontFamily: 'Inter',
    fontSize: 13,
    color: '#606263',
  },
});

const SUBSCRIBE_SEDIMENTATION_TANK = gql`
  subscription getDeviceStatus {
    deviceStatus(id: "gw01", tank: "sedimentation") {
      measurements {
        name
        value
      }
    }
  }
`

function SedimentationTank() {
  const pagerRef = useRef(null);
  const { data, loading, error } = useSubscription(SUBSCRIBE_SEDIMENTATION_TANK);
  const animatedValue = useAnimation({
    type: 'timing',
    initialValue: 0,
    toValue: data ? (data.deviceStatus.measurements[0]['value']==='HIGH'?200:50) : 200,
    duration: 600,
    useNativeDriver: false,
  })

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 200,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, []);

  const [chartData, setData] = useState({
    labels: [7, 6, 5, 4, 3, 2, 1, 0].map((hourToSubtract) => {
      const now = new Date();
      return hourToSubtract === 0 ? 'Current' : now.getHours() - hourToSubtract;
    }),
    legend: ['Temperature'],
    datasets: [
      {
        data: [3, 4, 5, 6, 7, 8, 9, 10],
      },
    ],
  });

  return (
    <View style={styles.container}>
      <View
        style={{
          borderRadius: 20,
          width: '100%',
          height: '8%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={styles.tankTitle}>Sedimentation Tank</Text>
      </View>
      <ViewPager style={{width: '100%', height: '100%'}} ref={pagerRef}>
        <View style={{flex: 1}} key="1">
          <View style={styles.waterLevelLayout}>
            <View style={styles.vessel}>
              <VesselMarker />
              <LinearGradient
                colors={['#C6D1EB', '#7497E5']}
                start={{x: 0.5, y: 0}}
                end={{x: 0.5, y: 1}}
                style={styles.thresholdGradient}>
                <Animated.View style={[{width: '100%'}, {height: animatedValue}]} />
              </LinearGradient>
            </View>
            <TouchableOpacity
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
        <View key="2">
          <ScrollView>
            <View
              style={{
                backgroundColor: 'rgba(196,196,196, 0.2)',
                width: '84%',
                height: 160,
                marginHorizontal: '8%',
                borderRadius: 20,
                marginVertical: '4%',
              }}>
              <Text
                style={{
                  marginLeft: '8%',
                  marginTop: '6%',
                  fontFamily: 'Inter',
                  fontSize: 25,
                  fontWeight: '700',
                  color: '#89969F',
                }}>
                pH
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  width: '84%',
                  marginHorizontal: '8%',
                  marginTop: 16,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <HealthBar />
                <Text
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: '700',
                    color: '#606263',
                    fontSize: 40,
                  }}>
                  5.5
                </Text>
              </View>
            </View>
            <LineChart
              data={chartData}
              withDots={false}
              width={340} // from react-native
              height={160}
              yAxisInterval={1} // optional, defaults to 1
              style={{
                borderRadius: 20,
                alignSelf: 'center',
              }}
              chartConfig={{
                backgroundColor: 'rgba(196,196,196, 0.2)',
                backgroundGradientFrom: 'rgb(196,196,196)',
                backgroundGradientTo: 'rgb(196,196,196)',
                backgroundGradientFromOpacity: 0.2,
                backgroundGradientToOpacity: 0.2,
                fillShadowGradient: '#3DD598',
                fillShadowGradientOpacity: 1,
                decimalPlaces: 1, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(97, 97, 97, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(97, 97, 97, ${opacity})`,
                propsForDots: {
                  r: '6',
                  strokeWidth: '2',
                  stroke: '#ffa726',
                },
              }}
              bezier
            />
            <View
              style={{
                backgroundColor: 'rgba(196,196,196, 0.2)',
                width: '84%',
                height: 160,
                marginHorizontal: '8%',
                borderRadius: 20,
                marginVertical: '4%',
              }}>
              <Text
                style={{
                  marginLeft: '8%',
                  marginTop: '6%',
                  fontFamily: 'Inter',
                  fontSize: 25,
                  fontWeight: '700',
                  color: '#89969F',
                }}>
                {`Average pH\n${moment().format('MMM')} ${moment().startOf('week').add(1, 'day').format('DD')} - ${moment().startOf('week').add(5, 'day').format('DD')}`}
                
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  width: '84%',
                  marginHorizontal: '8%',
                  marginTop: 16,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <HealthBar width="100%" status={3}/>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={{ flex: 1 }} key="3">
          <ScrollView>
            <View
              style={{
                backgroundColor: 'rgba(196,196,196, 0.2)',
                width: '84%',
                height: 160,
                marginHorizontal: '8%',
                borderRadius: 20,
                marginVertical: '4%',
              }}>
              <Text
                style={{
                  marginLeft: '8%',
                  marginTop: '6%',
                  fontFamily: 'Inter',
                  fontSize: 25,
                  fontWeight: '700',
                  color: '#89969F',
                }}>
                Turbidity
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  width: '84%',
                  marginHorizontal: '8%',
                  marginTop: 16,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <HealthBar />
                <Text
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: '700',
                    color: '#606263',
                    fontSize: 40,
                  }}>
                  5.5
                </Text>
              </View>
            </View>
            <LineChart
              data={chartData}
              withDots={false}
              width={340} // from react-native
              height={160}
              yAxisInterval={1} // optional, defaults to 1
              style={{
                borderRadius: 20,
                alignSelf: 'center',
              }}
              chartConfig={{
                backgroundColor: 'rgba(196,196,196, 0.2)',
                backgroundGradientFrom: 'rgb(196,196,196)',
                backgroundGradientTo: 'rgb(196,196,196)',
                backgroundGradientFromOpacity: 0.2,
                backgroundGradientToOpacity: 0.2,
                fillShadowGradient: '#3DD598',
                fillShadowGradientOpacity: 1,
                decimalPlaces: 1, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(97, 97, 97, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(97, 97, 97, ${opacity})`,
                propsForDots: {
                  r: '6',
                  strokeWidth: '2',
                  stroke: '#ffa726',
                },
              }}
              bezier
            />
            <View
              style={{
                backgroundColor: 'rgba(196,196,196, 0.2)',
                width: '84%',
                height: 160,
                marginHorizontal: '8%',
                borderRadius: 20,
                marginVertical: '4%',
              }}>
              <Text
                style={{
                  marginLeft: '8%',
                  marginTop: '6%',
                  fontFamily: 'Inter',
                  fontSize: 25,
                  fontWeight: '700',
                  color: '#89969F',
                }}>
                {`Average Turbidity\n${moment().format('MMM')} ${moment().startOf('week').add(1, 'day').format('DD')} - ${moment().startOf('week').add(5, 'day').format('DD')}`}
                
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  width: '84%',
                  marginHorizontal: '8%',
                  marginTop: 16,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <HealthBar width="100%" status={3}/>
              </View>
            </View>
          </ScrollView>
        </View>
      </ViewPager>
    </View>
  );
}

export default SedimentationTank;
