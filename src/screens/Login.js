import React, { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity, Text, ActivityIndicator } from "react-native";
import tailwind from 'tailwind-rn';

const styles = StyleSheet.create({
    loginContainer: {
        marginTop: 12,
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    textfield: {
        
    }
});


function Login() {

    const authenticate = async () => {
        setLoggingIn(true)
        const response = await fetch('http://greywater.mashiat.live/api/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        });

        setLoggingIn(false);
    }
    const [isLoggingIn, setLoggingIn] = useState(false);

    const [credentials, updateCredentials] = useState({
        email: '',
        password: ''
    })

    return (
        <View style={styles.loginContainer}>
            <View style={tailwind('items-center')}>
                <Text style={tailwind('font-bold text-xl')}>Greywater</Text>
            </View>
            <View style={{width: '100%', height: '20%'}}>
                <TextInput
                    autoCapitalize="none"
                    textContentType="emailAddress"
                    style={{ paddingHorizontal: 8, borderWidth:2, borderColor: '#d5d5d5', borderRadius: 10, height: 48, margin: 24, backgroundColor: '#fff' }}
                    value={credentials.email}
                    onChangeText={(email) => updateCredentials({ ...credentials, email })}
                />
                <TextInput
                    secureTextEntry={true}
                    style={{ paddingHorizontal: 8,borderWidth:2, borderColor: '#d5d5d5', borderRadius: 10, height: 48, margin: 24, backgroundColor: '#fff' }}
                    value={credentials.password}
                    onChangeText={(password) => updateCredentials({...credentials, password})}
                />
            </View>
            <View style={{ paddingHorizontal: 48}}>
                <TouchableOpacity onPress={() => authenticate()} style={tailwind('bg-indigo-600 rounded-lg h-10 justify-center items-center')}>
                    { isLoggingIn && <ActivityIndicator />}
                    <Text style={tailwind('text-white text-lg font-medium')}>Login</Text>
                </TouchableOpacity>
            </View>
            <View style={tailwind('px-4')}>
                <Text style={tailwind('font-medium text-gray-600 mt-4')}>Do not have a login? Please contact your administrator for assist</Text>
            </View>
        </View>
    )
}

export default Login;