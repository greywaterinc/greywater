import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import tailwind from 'tailwind-rn';

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
    marginTop: '60%',
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

function OTPVerifcation({email = 'greywater@mashiat.live'}) {
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
            Code was sent to {email}
          </Text>
        </View>
      </View>
      <View style={styles.otpInput}>
        <View style={styles.otpInputBlock}>
          <TextInput />
        </View>
        <View style={styles.otpInputBlock}>
          <TextInput />
        </View>
        <View style={styles.otpInputBlock}>
          <TextInput />
        </View>
        <View style={styles.otpInputBlock}>
          <TextInput />
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
      <TouchableOpacity style={styles.verifyButton}>
        <Text style={styles.verifyButtonText}>Verify</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default OTPVerifcation;
