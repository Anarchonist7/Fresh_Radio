import React from 'react';
import { Image, ImageBackground, TouchableOpacity, View, Text, StyleSheet } from 'react-native';

export default class CaptainScreen extends React.Component {
    constructor(props){
        super(props)
    }
    
    render() {
        return (
            <Image style={{ 
                width: '100%',
                height: '100%',
                resizeMode: 'stretch',
            }}  source={require('../assets/images/pirate-radio.png')} />
        )
    }
}