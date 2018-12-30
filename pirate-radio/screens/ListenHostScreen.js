import React from 'react';
import { ImageBackground, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Styles from '../assets/styles/AppStyles';

import { SeaBackground } from '../components/SeaBackground';

import CaptainScreen from './CaptainScreen';
import LoginRegisterScreen from './LoginRegisterScreen';
import SearchScreen from './SearchScreen';
import ShipCaptainScreen from './ShipCaptainScreen';
import ShipCrewScreen from './ShipCrewScreen';

import { Ionicons, Feather } from '@expo/vector-icons';

export default class ListenHostScreen extends React.Component {

    static NavigationOptions = { header: { visibile: false } };

    constructor(props){
        super(props)
    }

    render() {

        navigateToSearch = () => this.props.navigation.navigate('SearchScreen');

        navigateToCaptain = () => this.props.navigation.navigate('CaptainScreen');

        navigateToShipCaptain = () => this.props.navigation.navigate('ShipCaptainScreen');

        navigateToShipCrew = () => this.props.navigation.navigate('ShipCrewScreen');


        return (
            <SeaBackground >
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <TouchableOpacity style={[Styles.ListenHostButtons, {lineHeight: this.height}]} onPress={navigateToSearch}>
                        <View>
                            <Text style={ Styles.ListenHostText } >Crew</Text>
                            <Feather name="headphones" style={ Styles.ListenHostIcons } />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[Styles.ListenHostButtons, {lineHeight: this.height}]} onPress={navigateToLogin}>
                        <View>
                            <Text style={ Styles.ListenHostText } >Captain</Text>
                            <Ionicons name="ios-radio" style={ Styles.ListenHostIcons } />
                        </View>
                    </TouchableOpacity>
                </View>
            </SeaBackground>
        )
    }
}