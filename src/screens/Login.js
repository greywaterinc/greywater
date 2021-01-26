import { useMutation, gql } from '@apollo/client';
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import SInfo from "react-native-sensitive-info";

const styles = StyleSheet.create({
  logo: {
    marginVertical: '10%',
    alignSelf: 'center',
    width: 76,
    height: 76,
  },
  registration: {
    width: '100%',
    height: '50%',
    paddingHorizontal: '8%',
    justifyContent: 'space-between',
  },
  form: {
    justifyContent: 'space-between',
    height: '65%',
  },
  formField: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#323232',
  },
  formText: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '300',
    color: '#323232',
    marginBottom: 16,
  },
  formInput: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '300',
  },
  title: {
    marginBottom: '15%',
    letterSpacing: 0.99,
    fontFamily: 'Inter',
    fontSize: 24,
    fontWeight: '700',
  },
  loginButton: {
    alignSelf: 'center',
    marginTop: '30%',
    backgroundColor: '#6585DD',
    height: 44,
    width: 240,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  loginButtonText: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 15,
    color: '#fff',
  },
  forgotPasswordButton: {
    alignSelf: 'center',
    marginTop: 16,
    fontFamily: 'Inter',
    fontWeight: '300',
    fontSize: 16,
  },
  createAccount: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 16,
  },
  createAccountButton: {
    color: '#404CCF',
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 15,
  },
});

const LOGIN = gql`
  mutation authenticate($input: Credentials) {
    authenticate(input: $input) {
      idToken
      refreshToken
    }
  }
`

function Login({ navigation }) {

  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  })
  const [login, { data, loading, error }] = useMutation(LOGIN);

  return (
    <SafeAreaView>
      <Image
        source={require('../assets/images/logo.png')}
        style={styles.logo}
      />
      <View style={styles.registration}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.form}>
          <View style={styles.formField}>
            <Text style={styles.formText}>Email Address</Text>
            <TextInput
              style={styles.formInput}
              placeholder="Enter email"
              autoCapitalize="none"
              spellCheck={false}
              onChangeText={email => setCredentials({...credentials, email})} />
          </View>
          <View style={styles.formField}>
            <Text style={styles.formText}>Password</Text>
            <TextInput
              secureTextEntry
              autoCapitalize="none"
              style={styles.formInput}
              placeholder="Enter password"
              onChangeText={password => setCredentials({...credentials, password})}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={async () => {
          const { data } = await login({ variables: { input: credentials } });
          await SInfo.setItem('refreshToken', data.authenticate.refreshToken, {
              sharedPreferencesName: 'greywater-vault',
              keychainService: 'greywater-vault'
          });
        }}>
          { loading && <ActivityIndicator color="#fff"/> }
          <Text style={{...styles.loginButtonText, marginLeft: loading?8:0}}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.forgotPasswordButton}>Forgot Password?</Text>
        </TouchableOpacity>
        <View style={styles.createAccount}>
          <Text>New User?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
            <Text style={styles.createAccountButton}> Create Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Login;
