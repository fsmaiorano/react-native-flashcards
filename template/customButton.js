import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { white, black, gray } from '../template/colors';

function CustomButton({ children, onPress, style = {}, color, textColor }) {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: color}, style]}
            activeOpacity={0.2}
            onPress={onPress}
        >
            <Text style={[{color: textColor}, styles.text]}>
                {children}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        paddingLeft: 5,
        paddingRight: 5,
        height: 80,
        width: 100,
        borderRadius: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        alignItems: 'center',
    }
})

export default CustomButton;