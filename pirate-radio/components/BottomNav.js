import React from 'react';
import { ImageBackground, TouchableOpacity, Button, View, Text, StyleSheet, Platform } from 'react-native';

// import { createStackNavigator, createAppContainer } from 'react-navigation';
import { PirateText } from './PirateText';
import Styles from '../assets/styles/AppStyles';

import { Ionicons, Feather, Foundation } from '@expo/vector-icons';



export class BottomNav extends React.Component {

    constructor(props){
        super(props)
    }

    state = {
        isMuted: false
    }

    mute = () => {
        this.setState({
            isMuted: true
        })
    }

    unmute = () => {
        this.setState({
            isMuted: false
        })
    }
    render() {

        return (
            <View>
                <View style={Styles.BottomNavElements}>
                    <TouchableOpacity 
                        style={[Styles.BottomNavBackContainer, Platform.OS === 'ios' ? (Styles.BottomNavButtonContainerIOS) : (Styles.BottomNavButtonContainerAndroid) ]} 
                        onPress={() => { this.props.navigation.goBack() }}>
                        <Ionicons name='md-arrow-round-back' style={ Styles.BottomNavIcons }/>
                    </TouchableOpacity>
                        { this.state.isMuted ? (
                                <TouchableOpacity style={[Styles.BottomNavVolumeContainer, Platform.OS === 'ios' ? (Styles.BottomNavButtonContainerIOS) : (Styles.BottomNavButtonContainerAndroid) ]} 
                                onPress={this.unmute}>
                                    <Feather name='volume-x' style={ Styles.BottomNavIcons } /> 
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity style={[Styles.BottomNavVolumeContainer, Platform.OS === 'ios' ? (Styles.BottomNavButtonContainerIOS) : (Styles.BottomNavButtonContainerAndroid) ]} 
                                onPress={this.mute}>
                                    <Feather name='volume-2' style={ Styles.BottomNavIcons } />    
                                </TouchableOpacity>
                            )
                        }
                </View>
            </View>
        )
    }
}