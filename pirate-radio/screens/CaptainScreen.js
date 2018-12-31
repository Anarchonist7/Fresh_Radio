import React from 'react';
import { Image, TouchableOpacity, View, Text, TextInput, AsyncStorage, StatusBar } from 'react-native';
import Styles from '../assets/styles/AppStyles';

import { BottomNav } from '../components/BottomNav';
import { SeaBackground } from '../components/SeaBackground';
import YeOldShips from '../components/YeOldShips'

import { SimpleLineIcons, AntDesign } from '@expo/vector-icons';

import TextTicker from 'react-native-text-ticker'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

const PiratePNG = require('../assets/images/pirate.png');
const ShipWheelPNG = require('../assets/images/ship-wheel.png');

export default class CaptainScreen extends React.Component {
    
    static NavigationOptions = { header: { visibile: false } };

    constructor(props){
        super(props)
        this.state = {
            userToken: '',
            yeOldShips: [],
            newShipName: '',
            newShipMusicPath: '',
            newShipImagePath: '',
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

    handleShipName = (text) => {
        this.setState({ newShipName: text})
    }

    handleShipMusicPath = (text) => {
        this.setState({ newShipMusicPath: text})
    }
    handleShipImagePath = (text) => {
        this.setState({ newShipImagePath: text})
    }

    ShipFormSubmit = () => {
        console.log("heyo");
        // updateShip = () => {
        //     fetch(`${this.props.screenProps.createNewShipRequest}`, {
        //       method: 'POST',
        //       headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json',
        //       }
        //     })
        //     console.log('!!Post to ship')
        // }
    }

    componentDidMount(){
        fetch(`${this.props.screenProps.shipQueryRequest}?search=1`,{method: 'GET'}).then((responseData, error) => {
            if (error){
                throw new Error('Error: ', error);
            } else {
                const response = JSON.parse(responseData._bodyText)
                this.setState({
                    yeOldShips: response
                })
            }
        })
    }
    
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
                        <Text style={Styles.MediumTextPirate}>
                            Create New Ship <Image source={ShipWheelPNG} style={Styles.PirateShipIconMedium} />
                        </Text>
                        <View style={Styles.ShipFormContainer}>
                            <Text style={Styles.ShipFormLabelText}>Ship Name:</Text> 
                            <TextInput
                                style={Styles.ShipFormInputs}
                                placeholder='Please enter a name for your playlist.'
                                placeholderTextColor = 'black'
                                autoCorrect={false}
                                autoCapitalize='none'
                                clearIcon={{ color: 'black' }}
                                onChangeText = {this.handleShipName}/>
                            <Text style={Styles.ShipFormLabelText}>Ship URL</Text>
                            <TextInput 
                                style={Styles.ShipFormInputs}
                                placeholder='Please enter a link to a valid playlist.'
                                placeholderTextColor = 'black'
                                autoCorrect={false}
                                autoCapitalize='none'
                                clearIcon={{ color: 'black' }}
                                onChangeText = {this.handleShipMusicPath}/>
                            <Text style={Styles.ShipFormLabelText}>Ship Image URL</Text>
                            <TextInput 
                                style={Styles.ShipFormInputs}
                                placeholder='Please enter a link to a valid image.'
                                placeholderTextColor = 'black'
                                autoCorrect={false}
                                autoCapitalize='none'
                                clearIcon={{ color: 'black' }}
                                onChangeText = {this.handleShipImagePath}/>
                            <TouchableOpacity style={Styles.ShipFormButton} onPress={this.ShipFormSubmit}>
                                <Text style={Styles.ShipFormButtonText}>
                                    Launch  <AntDesign name='sound' style={Styles.ShipFormButtonIcon}/>
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={Styles.YeOldShips}>
                        <Text style={Styles.MediumTextPirate}>
                            Ye Old Ships <SimpleLineIcons name="anchor" style={Styles.MediumTextPirate} />
                        </Text>
                        <View style={Styles.YeOldShipsContainer}>
                        {   true ? (
                            <YeOldShips 
                                updateCurrentShip={this.props.screenProps.updateCurrentShip}
                                yeOldShips={this.state.yeOldShips} 
                                navigation={this.props.navigation}
                            />
                        ) : (
                            <Text style={[Styles.SmallTextNormal, {paddingLeft: 15}]}>
                                Nothin hurrr
                            </Text>
                        )}
                            {/* <TouchableOpacity 
                                style={Styles.YeOldShipsItems} 
                                onPress={() => { this.props.navigation.navigate('ShipCaptainScreen', {shipId: 3})
                            }}>
                                <Text style={Styles.SmallTextNormal}><SimpleLineIcons style={Styles.SmallWhiteIcon} name="anchor"/> daveys-tunes</Text>
                                <Text style={Styles.SmallTextNormal}>Songs: 20</Text>
                            </TouchableOpacity>

                            <TouchableOpacity 
                                style={Styles.YeOldShipsItems} 
                                onPress={() => { this.props.navigation.navigate('ShipCaptainScreen', {shipId: 1})
                            }}>
                                <Text style={Styles.SmallTextNormal}><SimpleLineIcons style={Styles.SmallWhiteIcon} name="anchor" /> barbosa-beats</Text>
                                <Text style={Styles.SmallTextNormal}>Songs: 16</Text>
                            </TouchableOpacity>

                            <TouchableOpacity 
                                style={Styles.YeOldShipsItems} 
                                onPress={() => { this.props.navigation.navigate('ShipCaptainScreen', {shipId: 2})
                            }}>
                                <Text style={Styles.SmallTextNormal}><SimpleLineIcons style={Styles.SmallWhiteIcon} name="anchor"/> jacks-jams</Text>
                                <Text style={Styles.SmallTextNormal}>Songs: 7</Text>
                            </TouchableOpacity> */}
                        </View>
                    </View>
                </View>
                <View style={Styles.Footer}>
                    <BottomNav navigation={this.props.navigation}/>
                </View>
            </SeaBackground>
        )
    }
}
