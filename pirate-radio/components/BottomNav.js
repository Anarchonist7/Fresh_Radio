import React from 'react';
import { ImageBackground, TouchableOpacity, Button, View, Text, StyleSheet } from 'react-native';

// import { createStackNavigator, createAppContainer } from 'react-navigation';
import { PirateText } from './PirateText';
import Styles from '../assets/styles/AppStyles';

import { Ionicons, Feather, Foundation } from '@expo/vector-icons';



export class BottomNav extends React.Component {

    constructor(props){
        super(props)
    }

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
            <View>
                <View style={Styles.BottomNavElements}>
                    <TouchableOpacity 
                        style={[Styles.BottomNavBackContainer, Platform.OS === 'ios' ? (Styles.BottomNavButtonContainerIOS) : (Styles.BottomNavButtonContainerAndroid) ]} 
                        onPress={() => { this.props.navigation.goBack() }}>
                        <Ionicons name='md-arrow-round-back' style={ Styles.BottomNavIcons }/>
                    </TouchableOpacity>
                        { this.state.volumeOn ? (
                                <TouchableOpacity style={[Styles.BottomNavVolumeContainer, Platform.OS === 'ios' ? (Styles.BottomNavButtonContainerIOS) : (Styles.BottomNavButtonContainerAndroid) ]} 
                                onPress={this.mute}>
                                    <Feather name='volume-2' style={ Styles.BottomNavIcons } />    
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity style={[Styles.BottomNavVolumeContainer, Platform.OS === 'ios' ? (Styles.BottomNavButtonContainerIOS) : (Styles.BottomNavButtonContainerAndroid) ]} 
                                onPress={this.unmute}>
                                    <Feather name='volume-x' style={ Styles.BottomNavIcons } /> 
                                </TouchableOpacity>
                            )
                        }
                </View>
            </View>
        )
    }
}