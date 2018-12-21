import React from 'react';

import { Font } from 'expo'
import { Image, ImageBackground, Button, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';


export default class ListenHostScreen extends React.Component {
    
    constructor(props){
        super(props)
    }
    
    state = {
        fontLoaded: false,
    }

    async componentDidMount() {
        await Font.loadAsync({
            'BlackPearl': require('../assets/fonts/BlackPearl.ttf'),
          });
      
          this.setState({ fontLoaded: true });
    }
    
    render() {

        handlePress = () => {
        }

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
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <TouchableOpacity style={[styles.button, styles.listenContainer]} onPress={this.handlePress}> 
                    {
                        this.state.fontLoaded ? (
                            <View>
                                <Text style={ styles.text } >Listen</Text>
                                <Feather name="headphones" style={ styles.icons } />
                            </View>
                        ) : null
                    }
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, styles.hostContainer]} onPress={this.handlePress}>
                    {
                        this.state.fontLoaded ? (
                            <View>
                                <Text style={ styles.text } >Host</Text>
                                <Ionicons name="ios-radio" style={ styles.icons } />
                            </View>
                        ) : null
                    }
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}



var styles = StyleSheet.create({
    button: {
        resizeMode: 'contain',
        height: '35%',
        lineHeight: '35%',
        width: '95%',
        margin: 10,
        borderRadius: 30,
        opacity: 0.9,
        borderWidth: 1,
        justifyContent: 'center'
    },
    
    text: {
        color: 'white',
        fontFamily: 'BlackPearl',
        fontWeight: 'bold',
        fontSize: 60,
        textAlign: 'center',

    },

    icons: {
        textAlign: 'center',
        fontSize: 60,
        color: 'white'
    },

    listenContainer: {
        backgroundColor: 'black'
    },

    hostContainer: {
        backgroundColor: 'black'
    }
});