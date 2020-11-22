import { HeaderTitle } from '@react-navigation/stack';
import * as React from 'react';
import {Keyboard, TouchableOpacity, StyleSheet, Text} from 'react-native'
const styles = {
    default: {

        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 8,
        paddingHorizontal: 24,
        minWidth: 96,
        height: 40, 
        elevation: 1,
        shadowColor: '#e4e4e4',
        shadowOpacity: 0.5,
        shadowOffset: {width: 1, height:3},
        shadowRadius: 5,

    }
}
function Button({ title, onPress, round=false, opaque=true, titleColor, bgColor, color, width}){
    
    const style = opaque?{
        borderRadius: round?20:5,
        backgroundColor: bgColor?bgColor:'#fff',
        width: width?width:title.length*20,
      }:{
        borderRadius: round?20:5,
        backgroundColor: '#fff',
        borderColor: color,
        borderWidth: StyleSheet.hairlineWidth,
        width: width?width:title.length*20,
      }
    return (
        <TouchableOpacity style = {{...styles.default, ...style}} onPress={onPress}>
            <Text style = {{fontSize: 16, color: titleColor?titleColor:'#fff'}}>{title.toUpperCase()}</Text>
        </TouchableOpacity>
    )

}

export default Button;