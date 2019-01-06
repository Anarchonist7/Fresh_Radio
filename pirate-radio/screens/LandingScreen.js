import React from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';
import Styles from '../assets/styles/AppStyles';

export default class LandingScreen extends React.Component {

    static NavigationOptions = { header: { visibile: false } };

    
    constructor(props){
        super(props)
    }
    
    render() {

        let fullHeight = Dimensions.get('window').height;
        let fullWidth = Dimensions.get('window').width;

        return (
            <Image style={{ 
                // width: '100%',
                width: fullWidth,
                // height: '100%',
                height: fullHeight,
                resizeMode: 'stretch',
            }}  source={require('../assets/images/pirate-radio.png')} />
        )
    }
}