// src/screens/ApresentationScreen.js

import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/theme';
import icon from "../../constants/icon.js";

const ApresentationScreen = () => {

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Image source={icon.logowhite} style={styles.logowhite} />
            </View>           
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.blue,
    },

    containerLogo: {
        width: 180,
        height: 180,
        justifyContent: 'center',
        alignItems: 'center'
    },

    logowhite: {
        width: '100%', 
        height: '100%', 
        resizeMode: 'contain'
    },
});

export default ApresentationScreen;

