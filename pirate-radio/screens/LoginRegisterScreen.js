import React from 'react';
import { Image, ImageBackground, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Styles from '../assets/styles/AppStyles';

export default class LoginRegisterScreen extends React.Component {

    static NavigationOptions = { header: { visibile: false } };

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