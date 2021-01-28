import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { useSubscription, gql } from '@apollo/client';

const SUBSCRIBE_ALL = gql`
  subscription getDeviceStatus{
    deviceStatus(id: "gw01") {
      id
      uptime
      measurements {
        tank
        name
        value
      }
    }
  }
`

function TestScreen() {
  
  const { data, loading, error } = useSubscription(SUBSCRIBE_ALL);
  
  return (
    <SafeAreaView>
      <View style={{width: '100%', height: '100%'}}>
        <Text style={{alignSelf: 'center', fontSize: 20, fontFamily: 'Inter', fontWeight: '600'}}>Data logging</Text>
        {
          !loading && (
            <View style={{height: '80%', justifyContent: 'space-around'}}>
              <View style={{width: '90%', alignSelf: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
                <View style={{width: 180, height: 180, borderColor: '#4a4a4a', borderWidth: 2, alignItems: 'center', justifyContent: 'space-evenly'}}>
                  <Text>Tank 0: {data.deviceStatus.measurements[0]['tank']}</Text>
                  <Text>{data.deviceStatus.measurements[0]['name']}:{'\n'}<Text style={{fontWeight: '700'}}>{data.deviceStatus.measurements[0]['value']}</Text></Text>
                </View>
                <View style={{width: 180, height: 180, borderColor: '#4a4a4a', borderWidth: 2, alignItems: 'center', justifyContent: 'space-evenly'}}>
                  <Text >Tank 1: {data.deviceStatus.measurements[3]['tank']}</Text>
                  <Text>{data.deviceStatus.measurements[1]['name']}:{'\n'}<Text style={{fontWeight: '700'}}>{data.deviceStatus.measurements[1]['value']}</Text></Text>
                  <Text>{data.deviceStatus.measurements[2]['name']}:{'\n'}<Text style={{fontWeight: '700'}}>{data.deviceStatus.measurements[2]['value']}</Text></Text>
                  <Text>{data.deviceStatus.measurements[3]['name']}:{'\n'}<Text style={{fontWeight: '700'}}>{data.deviceStatus.measurements[3]['value']}</Text></Text>
                </View>
              </View>
              <View style={{width: '90%', alignSelf: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
                <View style={{width: 180, height: 180, borderColor: '#4a4a4a', borderWidth: 2, alignItems: 'center', justifyContent: 'space-evenly'}}>
                  <Text >Tank 2: {data.deviceStatus.measurements[4]['tank']}</Text>
                  <Text>{data.deviceStatus.measurements[4]['name']}:{'\n'}<Text style={{fontWeight: '700'}}>{data.deviceStatus.measurements[4]['value']}</Text></Text>
                  <Text>{data.deviceStatus.measurements[5]['name']}:{'\n'}<Text style={{fontWeight: '700'}}>{data.deviceStatus.measurements[5]['value']}</Text></Text>
                </View>
                <View style={{width: 180, height: 180, borderColor: '#4a4a4a', borderWidth: 2, alignItems: 'center', justifyContent: 'space-evenly'}}>
                  <Text >Tank 3: {data.deviceStatus.measurements[6]['tank']}</Text>
                  <Text>{data.deviceStatus.measurements[6]['name']}:{'\n'}<Text style={{fontWeight: '700'}}>{data.deviceStatus.measurements[6]['value']}</Text></Text>
                  <Text>{data.deviceStatus.measurements[7]['name']}:{'\n'}<Text style={{fontWeight: '700'}}>{data.deviceStatus.measurements[7]['value']}</Text></Text>
                </View>
              </View>
              <View style={{width: '90%', alignSelf: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
                <View style={{width: 180, height: 180, borderColor: '#4a4a4a', borderWidth: 2, alignItems: 'center', justifyContent: 'space-evenly'}}>
                  <Text >Tank 4: {data.deviceStatus.measurements[8]['tank']}</Text>
                  <Text>{data.deviceStatus.measurements[8]['name']}:{'\n'}<Text style={{fontWeight: '700'}}>{data.deviceStatus.measurements[8]['value']}</Text></Text>
                </View>
                <View style={{width: 180, height: 180, borderColor: '#4a4a4a', borderWidth: 2, alignItems: 'center', justifyContent: 'space-evenly'}}>
                  <Text >Tank 5: {data.deviceStatus.measurements[9]['tank']}</Text>
                  <Text>{data.deviceStatus.measurements[9]['name']}:{'\n'}<Text style={{fontWeight: '700'}}>{data.deviceStatus.measurements[9]['value']}</Text></Text>
                  <Text>{data.deviceStatus.measurements[10]['name']}:{'\n'}<Text style={{fontWeight: '700'}}>{data.deviceStatus.measurements[10]['value']}</Text></Text>
                  <Text>{data.deviceStatus.measurements[11]['name']}:{'\n'}<Text style={{fontWeight: '700'}}>{data.deviceStatus.measurements[11]['value']}</Text></Text>
                </View>
              </View>
            </View>
          )
        }
      </View>
    </SafeAreaView>
  )
}

export default TestScreen;