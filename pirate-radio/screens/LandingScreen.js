import React from 'react';
import { Image, StyleSheet } from 'react-native';
import Styles from '../assets/styles/AppStyles';

export default class LandingScreen extends React.Component {
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