import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export const Button = () => {
    return(
        //TouchableOpacity in other words it is button
        <TouchableOpacity style = {styles.buttonStyle}>
        <Text>Click me!!!</Text>
        </TouchableOpacity>
    )
}

const styles = {
    buttonStyle: {
        flex:1,
        alignSelf: 'Stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
}