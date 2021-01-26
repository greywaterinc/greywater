import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import ViewPager from '@react-native-community/viewpager';
import React, { useRef, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

const Page = ({ title, subtitle, illustration }) => {
  return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image style={{marginBottom: 44}} source={illustration}/>
        <View style={{ marginTop: 16 }}>
          <Text style={{ fontSize: 27, fontWeight: '800', color: 'white', fontFamily: 'Inter' }}>
            {title}
          </Text>
          <Text style={{ marginTop: 20,fontSize: 18, fontWeight: '500', color: 'white', fontFamily: 'Inter' }}>
            {subtitle}
          </Text>
        </View>
      </View>
  );
};

function Briefing({ navigation }) {

  const [currentPage, setCurrentPage] = useState(1);
  const pagerRef = useRef(null);

  return (
    <LinearGradient colors={['#959595', '#282829']} start={{x: 0, y: 0}} end={{x: 1, y: 1}}>
      <View style={{ width: '100%', height: '100%' }}>
        <ViewPager style={{ width: '100%', height: '90%' }} ref={pagerRef}>
          <View key="1">
            <Page
              backgroundColor="#ffc93c"
              title="Recycle wastewater"
              subtitle="Reducing water waste everyday."
              illustration={require('../assets/images/onboarding/1.png')}
            />
          </View>
          <View key="2">
            <Page
              backgroundColor="#ffc93c"
              title="Water reused, saved."
              subtitle="Now in an app."
              illustration={require('../assets/images/onboarding/2.png')}
            />
          </View>
          <View key="3">
            <Page
              backgroundColor="#ffc93c"
              title="Control your features."
              subtitle="Recycling has never been easier."
              illustration={require('../assets/images/onboarding/3.png')}
            />
          </View>
        </ViewPager>
        <View style={{width: '100%', paddingHorizontal: '10%', flexDirection: 'row', justifyContent: 'space-between',  alignItems: 'center'}}>
          <View style={{flexDirection: 'row', width: 120, justifyContent: 'space-evenly'}}>
            {
              [1,2,3].map(
                index => (
                  <View key={index} style={{width: 8, height: 8, borderRadius: 4, backgroundColor: currentPage>=index?'#1763BB':'#fff'}}></View>
                )
              )
            }
          </View>
          <TouchableOpacity
            onPress={() => {
              if(currentPage<3) {
                setCurrentPage(currentPage+1);
                pagerRef.current.setPage(currentPage);
              } else {
                navigation.navigate('Greeting')
              }
            }}
            style={{ width: 52, height: 52, backgroundColor: '#fff', borderRadius: 8, justifyContent: 'center', alignItems: 'center'}}>
            <FontAwesomeIcon style={{color: '#1763BB'}} icon={['fas', 'chevron-right']}/>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  )
}

export default Briefing