import tailwind from "tailwind-rn"
import React, { useState } from "react"
import { View, TouchableOpacity, Text, StyleSheet, ActionSheetIOS, Modal, TouchableHighlight } from "react-native"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"

const styles = StyleSheet.create({
    something: {
        height: 56,
        width: 200,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 12,
        paddingVertical: 10,
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      },
      centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
    
})

function DashboardHeader({ isNameing=false, onCogPressed }) {

    const boxes = ['Kris Greywater', 'Mashiat Greywater'];
    const [viewingBox, setBox] = useState('Mashiat Greywater');
    const [modalVisible, setModalVisible] = useState(false);

    const chooseBox = () => {
        ActionSheetIOS.showActionSheetWithOptions({
            cancelButtonIndex: 0,
            options: ['Cancel', ...boxes]
        }, (buttonIndex) => {
            if(buttonIndex != 0) {
                setBox(boxes[buttonIndex-1])
            }
        })
    }

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 18, marginBottom: 16 }}>
          {
            !isNameing && (
              <TouchableOpacity style={styles.something} onPress={chooseBox}>
                <View style={{height: 8, width: 8, borderRadius: 4, backgroundColor: '#FBBF24', marginRight: 8}}></View>
                <Text style={tailwind('font-medium text-lg text-white')}>{viewingBox}</Text>
              </TouchableOpacity>
            )
          }
          <View style={{flexDirection: 'row'}}>
            {
              !isNameing && (
                <>
                  <TouchableOpacity 
                    onPress={() => {
                        setModalVisible(!modalVisible);
                      }}
                    style={{...tailwind('h-12 w-12 rounded-full justify-center items-center'), backgroundColor: 'rgba(255, 255, 255, 0.1)'}}>
                  <FontAwesomeIcon style={{color: 'white'}} icon={['fas', 'bell']} size={18}/>
                </TouchableOpacity>
                <TouchableOpacity  onPress={()=> onCogPressed()}style={{...tailwind('ml-2 h-12 w-12 rounded-full justify-center items-center'), backgroundColor: 'rgba(255, 255, 255, 0.1)'}}>
                  <FontAwesomeIcon style={{color: 'white'}} icon={['fas', 'cog']} size={18}/>
                </TouchableOpacity>
                </>
              )
            }
          </View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            }}
        >
            <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
        </Modal>
        </View>
    )
}

export default DashboardHeader;