import React from 'react';
import { ImageBackground, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { PirateText } from './PirateText';
import { Footer } from 'native-base';

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
            <Footer style={navstyles.elements}>
                <TouchableOpacity style={navstyles.back} onPress={() => this.props.navigation.goBack()}>
                    <Ionicons name='md-arrow-round-back' style={ navstyles.icon }/>
                    <PirateText style={ navstyles.text } >Back</PirateText>
                </TouchableOpacity>
                <View>
                    { this.state.volumeOn ? (
                            <TouchableOpacity style={navstyles.volume} onPress={this.mute}>
                                <Feather name='volume-2' style={ navstyles.icon } />    
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity style={navstyles.volume}>
                                <Feather name='volume-x' style={ navstyles.icon } /> 
                            </TouchableOpacity>
                        )
                    }
                </View>
            </Footer>
        )
    }
}

var navstyles = StyleSheet.create({
    elements: {
        height: '30%',
        width: '100%'
    },
    back: {
        resizeMode: 'contain',
        height: '15%',
        width: '50%',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        flexdirection: 'column',
        backgroundColor: 'orange',
    },
    volume: {
        resizeMode: 'contain',
        height: '15%',
        width: '50%',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        flexdirection: 'column',
        backgroundColor: 'red',
    },
    icon: {
        color: 'white'
    },
    text: {
        color: 'white'
    }
})