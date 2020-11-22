import React from "react";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 12,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '100%'
    }
});


function ThresholdLevel() {

    const colors = [
        '#e53e3e',
        '#f56565',
        '#f6ad55',
        '#f6e05e',
        '#68d391',
        '#81e6d9'
    ]

    return (
        <View style={styles.wrapper}>
            {
                colors.map(color => (
                    <View style={{backgroundColor: color, width: 8, height: 16, borderRadius: 10, marginRight: 12}}></View>
                ))
            }
        </View>
    )
}

export default ThresholdLevel;