import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import LinearGradient from 'react-native-linear-gradient';
import {SwipeablePanel} from 'rn-swipeable-panel';
// import Animated, { useSharedValue, useAnimatedStyle, withSpring, runOnJS } from 'react-native-reanimated';
import tailwind from 'tailwind-rn';
import {useAppDispatch, useAppState} from '../contexts/app';
import DashboardHeader from '../components/DashboardHeader';
import ChemicalTank from './ChemicalTank';
import SedimentationTank from './SedimentationTank';
import OZoneContactTank from './OZoneContactTank';
import ICEASTank from './ICEASTank';
import CollectionTank from './CollectionTank';
import StorageTank from './StorageTank';

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

function AllTanks() {
  const dispatch = useAppDispatch();

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          width: '100%',
        }}>
        <TouchableOpacity
          onPress={() => dispatch({type: 'openTankView', payload: 'chemical'})}>
          <LinearGradient
            colors={['#DBDEE4', '#BFD2F6']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.tankBlock}>
            <Image
              source={require('../assets/images/dashboard/chemical.png')}
            />
            <Text style={styles.tankTitle}>Chemical</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            dispatch({type: 'openTankView', payload: 'sedimentation'})
          }>
          <LinearGradient
            colors={['#E4ECD9', '#D9E7EB']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.tankBlock}>
            <Image
              source={require('../assets/images/dashboard/sedimentation.png')}
            />
            <Text style={styles.tankTitle}>Sedimentation</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          width: '100%',
          marginTop: '6%',
        }}>
        <TouchableOpacity
          onPress={() =>
            dispatch({type: 'openTankView', payload: 'ozone_contact'})
          }>
          <LinearGradient
            colors={['#E7E9EB', '#B8C5D0']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.tankBlock}>
            <Image source={require('../assets/images/dashboard/ozone.png')} />
            <Text style={styles.tankTitle}>{'Ozone\nContact'}</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => dispatch({type: 'openTankView', payload: 'iceas'})}>
          <LinearGradient
            colors={['#DEDEDE', '#C2CFCE']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.tankBlock}>
            <Image source={require('../assets/images/dashboard/iceas.png')} />
            <Text style={styles.tankTitle}>ICEAS</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          width: '100%',
          marginTop: '6%',
        }}>
        <TouchableOpacity
          onPress={() =>
            dispatch({type: 'openTankView', payload: 'collection'})
          }>
          <LinearGradient
            colors={['#D7E0E2', '#D9EBF0']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.tankBlock}>
            <Image
              source={require('../assets/images/dashboard/collection.png')}
            />
            <Text style={styles.tankTitle}>Collection</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => dispatch({type: 'openTankView', payload: 'storage'})}>
          <LinearGradient
            colors={['#DADCDF', '#DDE8FF']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.tankBlock}>
            <Image source={require('../assets/images/dashboard/storage.png')} />
            <Text style={styles.tankTitle}>Storage</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function BackButton() {
  const dispatch = useAppDispatch();
  return (
    <TouchableOpacity
      onPress={() => dispatch({type: 'closeTankView'})}
      style={{
        marginTop: 36,
        width: 56,
        height: 56,
        backgroundColor: 'rgba(196,196,196,0.5)',
        alignSelf: 'center',
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <FontAwesomeIcon color="#fff" icon={['fas', 'times']} size={20} />
    </TouchableOpacity>
  );
}

function TankView({tank}) {
  switch (tank) {
    case 'chemical':
      return <ChemicalTank />;
    case 'sedimentation':
      return <SedimentationTank />;
    case 'ozone_contact':
      return <OZoneContactTank />;
    case 'iceas':
      return <ICEASTank />;
    case 'collection':
      return <CollectionTank />;
    case 'storage':
      return <StorageTank />;
    default:
      return <ChemicalTank />;
  }
}

function Dashboard() {
  const {viewingTank, isTankPanelOpen} = useAppState();
  const dispatch = useAppDispatch();

  const [panelProps, setPanelProps] = useState({
    fullWidth: true,
    openLarge: true,
    showCloseButton: true,
    onClose: () => dispatch({type: 'closeTankView'}),
    onPressCloseButton: () => dispatch({type: 'closeTankView'}),
  });

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo.png')}
        style={styles.logo}
      />
      <DashboardHeader />
      <View style={styles.card}>
        <AllTanks />
      </View>
      <SwipeablePanel
        {...panelProps}
        style={{height: '70%'}}
        isActive={isTankPanelOpen}
        showCloseButton={false}
        onlyLarge={true}>
        <View style={{flex: 1, height: 480}}>
          <TankView tank={viewingTank} />
        </View>
        <BackButton />
      </SwipeablePanel>
    </View>
  );
}

export default Dashboard;
