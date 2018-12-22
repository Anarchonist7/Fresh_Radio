import React from 'react';
import { ImageBackground, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import { Font } from 'expo'
import { Ionicons, Feather } from '@expo/vector-icons';

const bgImageAsset = require('../assets/images/pirate-radio-background.jpg');
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

        navigateToCaptain = () => {
            this.props.navigation.navigate('CaptainScreen');
        }

        navigateToSearch = () => {
            this.props.navigation.navigate('SearchScreen');
        }

        console.log('BGIA', Expo.Asset.fromModule(bgImageAsset));
        return (
            <ImageBackground 
                source={bgImageAsset} 
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
                    <TouchableOpacity style={[styles.button]} onPress={this.navigateToSearch}> 
                    {
                        this.state.fontLoaded ? (
                            <View>
                                <Text style={ styles.text } >Crew</Text>
                                <Feather name="headphones" style={ styles.icons } />
                            </View>
                        ) : null
                    }
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button]} onPress={this.navigateToCaptain}>
                    {
                        this.state.fontLoaded ? (
                            <View>
                                <Text style={ styles.text } >Captain</Text>
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
        fontFamily: 'BlackPearl',
        fontWeight: 'bold',
        fontSize: 60,
        textAlign: 'center',

    },

    icons: {
        textAlign: 'center',
        fontSize: 60,
        color: 'white'
    }
});