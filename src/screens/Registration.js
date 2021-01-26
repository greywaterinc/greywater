import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

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
    height: '90%',
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
    fontFamily: 'Inter',
    fontSize: 24,
    fontWeight: '700',
  },
  registerButton: {
    alignSelf: 'center',
    marginTop: '60%',
    backgroundColor: '#6585DD',
    height: 44,
    width: 240,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerButtonText: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 15,
    color: '#fff',
  },
});

function Registration() {
  return (
    <SafeAreaView>
      <Image
        source={require('../assets/images/logo.png')}
        style={styles.logo}
      />
      <View style={styles.registration}>
        <Text style={styles.title}>Registration</Text>
        <View style={styles.form}>
          <View style={styles.formField}>
            <Text style={styles.formText}>Full Name</Text>
            <TextInput 
              placeholder="Enter full name"
              style={styles.formInput} />
          </View>
          <View style={styles.formField}>
            <Text style={styles.formText}>Email Address</Text>
            <TextInput
              style={styles.formInput}
              placeholder="Enter email address"
            />
          </View>
          <View style={styles.formField}>
            <Text style={styles.formText}>Password</Text>
            <TextInput
              secureTextEntry
              style={styles.formInput}
              placeholder="Enter new password"
            />
          </View>
        </View>
        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Registration;
