import React from 'react';
import { ImageBackground, TouchableOpacity, Button, View, Text, StyleSheet } from 'react-native';
// import { createStackNavigator, createAppContainer } from 'react-navigation';
import { PirateText } from './PirateText';
import Styles from '../assets/styles/AppStyles';

import { Ionicons, Feather, Foundation } from '@expo/vector-icons';



export class BottomNav extends React.Component {

    state = {
        volumeOn: true
    }

    mute = () => {
        this.setState({
            volumeOn: false
        })
    }

    unmute = () => {
        this.setState({
            volumeOn: true
        })
    }
    render() {
        return (
            <View style={Styles.container}>
                <View style={Styles.BottomNavElements}>
                    <TouchableOpacity style={[Styles.BottomNavButtonContainer, Styles.BottomNavBackContainer]} onPress={() => this.props.navigation.goBack()}>
                        <Ionicons name='md-arrow-round-back' style={ Styles.BottomNavIcons }/>
                    </TouchableOpacity>
                        { this.state.volumeOn ? (
                                <TouchableOpacity style={[Styles.BottomNavButtonContainer, Styles.BottomNavVolumeContainer]} onPress={this.mute}>
                                    <Feather name='volume-2' style={ Styles.BottomNavIcons } />    
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity style={[Styles.BottomNavButtonContainer, Styles.BottomNavVolumeContainer]} onPress={this.unmute}>
                                    <Feather name='volume-x' style={ Styles.BottomNavIcons } /> 
                                </TouchableOpacity>
                            )
                        }
                </View>
            </View>
        )
    }
}

// var navstyles = StyleSheet.create({
//     BottomNavcontainer: {
//         height: '100%',
//         width: '100%'
//     },
//     BottomNavElements: {
//         flex: 1,
//         justifyContent: 'space-between',
//         flexDirection: 'row',
//     },
//     BottomNavButtonContainer: {
//         justifyContent: 'center',
//         flex: 0.23,
//         height: '70%',
//         borderRadius: 40,
//         backgroundColor: '#383131',
//     },
//     BottomNavBackContainer: {
//         marginLeft: 10,
//     },

//     BottomNavVolumeContainer: {
//         marginRight: 10,
//     },

//     BottomNavIcons: {
//         textAlign: 'center',
//         color: 'white',
//         fontSize: 50,
//     },
// })