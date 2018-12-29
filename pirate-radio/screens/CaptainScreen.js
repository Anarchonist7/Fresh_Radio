import React from 'react';
import { Image, ImageBackground, TouchableOpacity, View, Text, TextInput, StyleSheet } from 'react-native';
import Styles from '../assets/styles/AppStyles';

import { BottomNav } from '../components/BottomNav';
import { SeaBackground } from '../components/SeaBackground';

import { SimpleLineIcons } from '@expo/vector-icons';

const PiratePNG = require('../assets/images/pirate.png');

export default class CaptainScreen extends React.Component {
    
    static NavigationOptions = { header: { visibile: false } };

    constructor(props){
        super(props)
    }
    
    render() {
        return (
            <SeaBackground >
                <View style={Styles.Boxes}>
                    <View style={Styles.CaptainHeader}>
                        <Text style={Styles.CaptainHeaderText}>
                            <Image source={PiratePNG} style={[ Styles.CaptainIconMedium ]}/> Captain
                        </Text>
                        <SimpleLineIcons name='logout' style={Styles.LogoutIcon}/>
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