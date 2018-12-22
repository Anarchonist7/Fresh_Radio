import React from 'react';
import { ImageBackground, TouchableOpacity, Button, View, Text, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { PirateText } from './PirateText';

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
            <View style={navstyles.container}>
                <View style={navstyles.elements}>
                    <TouchableOpacity style={[navstyles.buttonContainer, navstyles.backContainer]} onPress={() => this.props.navigation.goBack()}>
                        <Ionicons name='md-arrow-round-back' style={ navstyles.icon }/>
                    </TouchableOpacity>
                        { this.state.volumeOn ? (
                                <TouchableOpacity style={[navstyles.buttonContainer, navstyles.volumeContainer]} onPress={this.mute}>
                                    <Feather name='volume-2' style={ navstyles.icon } />    
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity style={[navstyles.buttonContainer, navstyles.volumeContainer]} onPress={this.unmute}>
                                    <Feather name='volume-x' style={ navstyles.icon } /> 
                                </TouchableOpacity>
                            )
                        }
                </View>
            </View>
        )
    }
}

var navstyles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%'
    },
    elements: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    buttonContainer: {
        justifyContent: 'center',
        flex: 0.23,
        height: '70%',
        borderRadius: 40,
        backgroundColor: '#383131',
    },
    backContainer: {
        marginLeft: 10,
    },

    volumeContainer: {
        marginRight: 10,
    },

    icon: {
        textAlign: 'center',
        color: 'white',
        fontSize: 50,
    },
})