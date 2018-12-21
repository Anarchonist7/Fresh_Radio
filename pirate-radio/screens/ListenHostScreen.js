import React from 'react';
import { Button } from 'react-native-material-ui';
import { Image, ImageBackground, View, Text, StyleSheet } from 'react-native';
import LandingImage from '../components/LandingImage';
import { BlackPearl } from '../components/BlackPearlText';


export default class ListenHostScreen extends React.Component {
    constructor(props){
        super(props)
    }
    
    render() {
        return (
            <ImageBackground 
                source={require('../assets/images/pirate-radio-background.png')} 
                style={{
                    width: '100%',
                    height: '100%',
                }}
                imageStyle={{
                    resizeMode: 'stretch'
                }}>
                <View style={{
                    flex: 2,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Button style={{
                        container:[
                            styles.container, 
                            styles.listenContainer
                        ],
                        text: styles.text
                    }} primary text="Listen" />

                    <Button style={{
                        container:[ 
                            styles.container,
                            styles.hostContainer
                        ],
                        text: styles.text 
                    }} primary text="Host" />
                </View>
            </ImageBackground>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        resizeMode: 'stretch',
        height: '35%',
        width: '90%',
        margin: 10,
        borderRadius: 30,
        opacity: 1,
        borderWidth: 1
    },
    
    text: {
        color: 'white',
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        fontSize: 50
    },

    listenContainer: {
        backgroundColor: 'darkgreen'
    },

    hostContainer: {
        backgroundColor: 'saddlebrown'
    }
});