import React from 'react';
import { Image, ImageBackground, TouchableOpacity, View, Text, TextInput, StyleSheet, Button, AsyncStorage, StatusBar } from 'react-native';
import Styles from '../assets/styles/AppStyles';

import { BottomNav } from '../components/BottomNav';
import { SeaBackground } from '../components/SeaBackground';

import { SimpleLineIcons } from '@expo/vector-icons';

import TextTicker from 'react-native-text-ticker'

const PiratePNG = require('../assets/images/pirate.png');

export default class CaptainScreen extends React.Component {
    
    static NavigationOptions = { header: { visibile: false } };

    constructor(props){
        super(props)
        this.state = {
            userToken: ''
        }
        this.getUserToken()
    }

    getUserToken = async () => {
        const userToken = await AsyncStorage.getItem('userToken');
        this.setState({
            userToken: userToken
        })
    };

    signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('HomeScreen');
    };
    
    render() {
        return (
            <SeaBackground >
                <View style={Styles.Boxes}>
                    <View style={Styles.CaptainHeader}>
                        <Image source={PiratePNG} style={Styles.CaptainIconMedium}/>
                        <View style={Styles.CaptainHeaderTickerContainer}>
                            <TextTicker style={Styles.CaptainHeaderText} duration={8000} marqueeOnMount loop bounce>
                                Captain {this.state.userToken}
                            </TextTicker>
                        </View>
                        <SimpleLineIcons name='logout' style={Styles.LogoutIcon} onPress={this.signOutAsync}/>
                    </View>

                    <View style={Styles.NewShip}>

                    </View>
                    <View style={Styles.YeOldShips}>
                        
                    </View>
                </View>
                <View style={Styles.Footer}>
                    <BottomNav navigation={this.props.navigation}/>
                </View>
            </SeaBackground>
        )
    }
}
