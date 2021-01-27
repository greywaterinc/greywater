import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, { useEffect } from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import tailwind from 'tailwind-rn';
import { useMutation, gql } from '@apollo/client'

const styles = StyleSheet.create({
  header: {
    padding: '8%',
    width: '100%',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '10%',
  },
  backButtonText: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '600',
    color: '#404CCF',
    marginLeft: 12,
  },
  otpInstructionTitle: {
    fontFamily: 'Inter',
    fontSize: 24,
    fontWeight: '700',
  },
  otpInstructionSubtext: {
    marginTop: 8,
    fontFamily: 'Inter',
    fontSize: 14,
    color: '#323232',
  },
  otpInput: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: '10%',
  },
  otpInputBlock: {
    backgroundColor: '#ebebeb',
    borderRadius: 16,
    height: 64,
    width: 64,
  },
  otpHint: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    paddingHorizontal: '8%',
  },
  otpHintText: {
    fontWeight: '400',
    fontFamily: 'Inter',
    fontSize: 14,
  },
  otpResendButton: {
    flexDirection: 'row',
  },
  otpResendButtonText: {
    marginLeft: 6,
    color: '#404CCF',
    fontFamily: 'Inter',
    fontWeight: '600',
  },
  verifyButton: {
    alignSelf: 'center',
    backgroundColor: '#6585DD',
    height: 44,
    width: 240,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  verifyButtonText: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 15,
    color: '#fff',
  },
});

function OTPVerifcation({navigation, route}) {

  const { registrationInfo } = route.params;
  const SEND_OTP = gql`
    mutation sendOTP($code: String, $address: String) {
      sendVerificationCode(code: $code, address: $address)
    }
  `
  const [sendOtp, { loading }] = useMutation(SEND_OTP)

  useEffect(() => {
    sendOtp({
      variables: {
        code: [0,0,0,0].map(digit => Math.floor(Math.random() * 9) + 1  ).join(''),
        address: registrationInfo.email
      }
    })
  }, [])
  

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <FontAwesomeIcon
            style={{color:'#404CCF'}}
            icon={['fas', 'arrow-left']}
          />
          <Text style={styles.backButtonText}>OTP Verification</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.otpInstructionTitle}>
            Please Enter OTP for verification
          </Text>
          <Text style={styles.otpInstructionSubtext}>
            Code was sent to {registrationInfo.email}
          </Text>
        </View>
      </View>
      <View style={styles.otpInput}>
        <View style={styles.otpInputBlock}>
          <TextInput keyboardType='number-pad' style={{width: '100%', fontFamily: 'Inter', fontWeight: '600', fontSize: 40, padding: 10}}/>
        </View>
        <View style={styles.otpInputBlock}>
          <TextInput keyboardType='number-pad' style={{width: '100%', fontFamily: 'Inter', fontWeight: '600', fontSize: 40, padding: 10}}/>
        </View>
        <View style={styles.otpInputBlock}>
          <TextInput keyboardType='number-pad' style={{width: '100%', fontFamily: 'Inter', fontWeight: '600', fontSize: 40, padding: 10}}/>
        </View>
        <View style={styles.otpInputBlock}>
          <TextInput keyboardType='number-pad' style={{width: '100%', fontFamily: 'Inter', fontWeight: '600', fontSize: 40, padding: 10}}/>
        </View>
      </View>
      <View style={styles.otpHint}>
        <Text>Did't receive an OTP?</Text>
        <TouchableOpacity style={styles.otpResendButton}>
          <FontAwesomeIcon
            style={{color: '#404CCF'}}
            icon={['fas', 'redo-alt']}
          />
          <Text style={styles.otpResendButtonText}>Resend</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: '60%'}}>
        <TouchableOpacity style={styles.verifyButton} onPress={() => navigation.navigate('NameDevice')}>
          <Text style={styles.verifyButtonText}>Verify</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default OTPVerifcation;
