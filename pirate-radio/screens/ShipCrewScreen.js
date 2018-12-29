import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { BottomNav } from '../components/BottomNav';

import { SeaBackground } from '../components/SeaBackground';
import Listener from '../components/Listener';
import Styles from '../assets/styles/AppStyles';

import Player from '../components/Player';
import TrackList from '../components/TrackList';

const PiratePNG = require('../assets/images/pirate.png');

export default class ShipCrewScreen extends React.Component {

    static NavigationOptions = { header: { visibile: false } };

    constructor(props){
        super(props)
        // this.state = {
        //     loading: true
        // }
    }

    shipId = this.props.navigation.getParam('shipId', null);

    componentDidMount() {
        this.props.screenProps.getShip(this.shipId).then((response) => {
            console.log('SHIPCREWSCREEN RESPONSE!!!!!', response)
            this.setState({
                captain: response.captain,
            }, () => {
                console.log('---------we just set state now here it is: ', this.state)
            })
        });
    }

    render() {

        // const { ship, tracks, captain } = this.state;


            return (
                <SeaBackground>
                        <View style={Styles.Boxes}>
                            <View style={Styles.ShipHeader}>
                                <Text>
                                    <Text style={Styles.BigTextPirate}>Captain {'captain'}</Text>
                                    <Image source={PiratePNG} style={ Styles.CaptainIconMedium } />
                                </Text>
                            </View>

                            <View style={Styles.NowPlaying}>
                                <Listener tracks={this.props.screenProps.tracks} ship={this.props.screenProps.ship} updateCurrentTrack={this.props.screenProps.updateCurrentTrack.bind(this)}/>
                            </View>

                            <View style={Styles.Playlist}>
                                <Text style={Styles.BigTextPirate}>{this.props.screenProps.ship.name}{'\n'}</Text>
                                <TrackList tracks={this.props.screenProps.tracks} ship={this.props.screenProps.ship} updateCurrentTrack={this.props.screenProps.updateCurrentTrack}/>
                            </View>
                        </View>
                        <View style={Styles.Footer}>
                            <BottomNav navigation={this.props.navigation}/>
                        </View>
                </SeaBackground>
            )

    }
}
