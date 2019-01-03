import React from 'react';
import { ImageBackground, TouchableOpacity, Button, View, Text, StyleSheet, Platform } from 'react-native';

// import { createStackNavigator, createAppContainer } from 'react-navigation';
import Styles from '../assets/styles/AppStyles';

import { Ionicons, Feather, Foundation } from '@expo/vector-icons';



export class BottomNav extends React.Component {

    constructor(props){
        super(props)
    }


    mute = () => {
        this.props.muteOrUnmute();
    }

    unmute = () => {
        this.props.muteOrUnmute();
    }

    render() {

        return (
            <View>
                <View style={Styles.BottomNavElements}>
                    <TouchableOpacity 
                        style={[Styles.BottomNavBackContainer, Platform.OS === 'ios' ? (Styles.BottomNavButtonContainerIOS) : (Styles.BottomNavButtonContainerAndroid) ]} 
                        onPress={() => { this.props.navigation.goBack() }}>
                            <Text style={Styles.BottomNavTextPirate}>
                                <Ionicons name='md-arrow-round-back' style={ Styles.BottomNavBackIcon }/> BAcK
                            </Text>
                    </TouchableOpacity>
                        { this.props.isMuted ? (
                                <TouchableOpacity 
                                style={[Styles.BottomNavVolumeContainer, Platform.OS === 'ios' ? (Styles.BottomNavButtonContainerIOS) : (Styles.BottomNavButtonContainerAndroid) ]} 
                                onPress={this.unmute}>
                                    <Text style={[Styles.BottomNavTextPirate, {textAlign: 'right'}]}>
                                        UNMUTE <Feather name='volume-2' style={Styles.BottomNavVolumeIcon}/>
                                    </Text>
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity 
                                style={[Styles.BottomNavVolumeContainer, Platform.OS === 'ios' ? (Styles.BottomNavButtonContainerIOS) : (Styles.BottomNavButtonContainerAndroid) ]} 
                                onPress={this.mute}>
                                    <Text style={[Styles.BottomNavTextPirate, {textAlign: 'right'}]}>
                                        MUTE <Feather name='volume-x' style={Styles.BottomNavVolumeIcon}/>
                                    </Text>
                                </TouchableOpacity>
                            )
                        }
                </View>
            </View>
        )
    }
}