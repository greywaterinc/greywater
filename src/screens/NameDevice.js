import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import tailwind from 'tailwind-rn';
import DashboardHeader from '../components/DashboardHeader';

import { Root } from 'popup-ui';
import { TextInput } from 'react-native-gesture-handler';

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
    justifyContent: 'space-around',
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


function NameDevice({ navigation }) {

  return (
    <Root>
      <View style={styles.container}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
        />
        <DashboardHeader isNameing={true} />
        <View style={styles.card}>
          <View style={{width: '80%', borderBottomWidth: 2, borderBottomColor: '#000'}}>
            <TextInput style={{fontSize: 40, fontFamily: 'Inter', fontWeight: '600', width: '80%'}}/>
          </View>
          <View style={{marginHorizontal: '10%'}}>
          <Text style={{fontFamily: 'Inter', fontWeight: '600', fontSize: 40, color: '#323232'}}>Let's give your Greywater a name.</Text>
          </View>
          <TouchableOpacity 
            onPress={() => navigation.navigate('Dashboard')}
            style={{ width: 270, height: 48, backgroundColor: '#6585dd', borderRadius: 24, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: '#fff', fontSize: 15, fontFamily: 'Inter', fontWeight: '600'}}>Let's Begin</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Root>
  );
}

export default NameDevice;
