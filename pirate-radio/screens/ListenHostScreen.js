import React from 'react';
import { ImageBackground, TouchableOpacity, View, Text, StyleSheet } from 'react-native';

import { createStackNavigator, createAppContainer } from 'react-navigation';

import { SeaBackground } from '../components/SeaBackground';
import { PirateText } from '../components/PirateText';

import CaptainScreen from './CaptainScreen';
import SearchScreen from './SearchScreen';

import { Ionicons, Feather } from '@expo/vector-icons';

export default class ListenHostScreen extends React.Component {
    
    constructor(props){
        super(props)
    }

    render() {

        navigateToCaptain = () => {
            this.props.navigation.navigate(CaptainScreen);
        }

        navigateToSearch = () => {
            this.props.navigation.navigate(SearchScreen);
        }

        return (
            <SeaBackground >
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <TouchableOpacity style={[styles.button]} onPress={this.navigateToSearch}> 
                        <View>
                            <PirateText style={ styles.text } >Crew</PirateText>
                            <Feather name="headphones" style={ styles.icons } />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button]} onPress={this.navigateToCaptain}>
                        <View>
                            <PirateText style={ styles.text } >Captain</PirateText>
                            <Ionicons name="ios-radio" style={ styles.icons } />
                        </View>
                    </TouchableOpacity>
                </View>
            </SeaBackground>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        resizeMode: 'contain',
        height: '35%',
        lineHeight: this.height,
        width: '95%',
        margin: 10,
        borderRadius: 30,
        opacity: 0.9,
        borderWidth: 1,
        justifyContent: 'center',
        backgroundColor: 'black'
    },

    text: {
        color: 'white',
        fontSize: 60,
        textAlign: 'center',
    },

    icons: {
        textAlign: 'center',
        fontSize: 60,
        color: 'white'
    }
});