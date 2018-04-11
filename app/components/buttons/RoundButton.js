import PropTypes from "prop-types";
import React from "react";
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

const RoundButton = ({ text, onPress }) => (
    <TouchableHighlight style={styles.container} onPress={onPress}>
        <Text style={styles.text}>
            {text}
        </Text>
    </TouchableHighlight>
)

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 35,
        height: 35,
        backgroundColor: '#fff',
        borderRadius: 100,
    },
    text: {
        fontSize: 10,
        alignSelf: 'center',
    }
})
 export default RoundButton;