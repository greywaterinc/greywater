import * as React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Image,
    TouchableOpacity,
    View,
    Text,
    StatusBar
  } from 'react-native';
import Button from "../components/Button"

const styles = StyleSheet.create({
    greeting: {
        marginTop: 70

    }
})
function GreetingScreen({navigation}){
    return (
        <>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView>
            <Image 
            style = {styles.greeting}
            source = {require('../../assets/greetings1.png')}
            />
            <Button
                title = "Get Started"
                onPress={()=> navigation.navigate('Login')}
                bgColor ='#4dacdb' titleColor='#fff'
                width= "50%"
            />
            <Button
                title = "Monitor"
                onPress={()=> navigation.navigate('Monitor')}
                bgColor ='#4dacdb' titleColor='#fff'
                width= "50%"
            />
            
           
    
          </SafeAreaView>
        </>
      );
}
export default GreetingScreen;