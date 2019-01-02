import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { BottomNav } from '../components/BottomNav';
import Styles from '../assets/styles/AppStyles';

const PiratePNG = require('../assets/images/pirate.png');

import { SeaBackground } from '../components/SeaBackground';
import LandingScreen from '../screens/LandingScreen'
import Player from '../components/Player';
import TrackList from '../components/TrackList';
import { account } from '../components/functions';


export default class ShipCaptainScreen extends React.Component {

    static NavigationOptions = { header: { visibile: false } };

    constructor(props){
        super(props)
        // accounted = account(props.screenProps.ship, props.screenProps.tracks)
    }

    componentDidMount(){
        const shipId = this.props.navigation.getParam('shipId', null);
        this.props.screenProps.loadShip(shipId).then(() => {
            this.props.screenProps.downloadTracks(shipId)
        })
    }

    render() {
        const {ship, tracks, captain} = this.props.screenProps;
        if (this.props.screenProps.shipLoading){
            return <SeaBackground />
        } else {
            return (
                <SeaBackground>
                    <View style={Styles.Boxes}>
                        <View style={Styles.ShipHeader}>
                            <Text>
                                <Image source={PiratePNG} style={ Styles.CaptainIconMedium } />
                                <Text style={Styles.BigTextPirate}> Captain Barbosa </Text>
                            </Text>
                        </View>

                        <View style={Styles.NowPlayingCaptain}>
                            <Player ship={ship} tracks={tracks} sendMessage={this.props.screenProps.sendMessage} isMuted={this.props.screenProps.isMuted} paused={this.props.screenProps.paused} updateCurrentTrack={this.props.screenProps.updateCurrentTrack.bind(this)}/>
                        </View>

                        <View style={Styles.Playlist}>
                            <Text style={Styles.BigTextPirate}>{ship.name}{'\n'}</Text>
                            <ScrollView style={Styles.TrackListContainer}>
                                <TrackList tracks={this.props.screenProps.tracks} ship={this.props.screenProps.ship} updateCurrentTrack={this.props.screenProps.updateCurrentTrack}/>
                            </ScrollView>
                        </View>
                    </View>
                    <View style={Styles.Footer}>
                        <BottomNav navigation={this.props.navigation} muteOrUnmute={this.props.screenProps.muteOrUnmute} isMuted={this.props.screenProps.isMuted}/>
                    </View>
                </SeaBackground>
            )
        }
    }
}