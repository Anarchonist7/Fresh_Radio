import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { BottomNav } from '../components/BottomNav';
import Styles from '../assets/styles/AppStyles';

const PiratePNG = require('../assets/images/pirate.png');

import { SeaBackground } from '../components/SeaBackground';
import Player from '../components/Player';
import TrackList from '../components/TrackList';
import { account } from '../components/functions';


export default class ShipCaptainScreen extends React.Component {

    static NavigationOptions = { header: { visibile: false } };

    constructor(props){
        super(props)
        // accounted = account(props.screenProps.ship, props.screenProps.tracks)
    }

    render() {
        const {ship, tracks} = this.props.screenProps;
        // console.log('--------captainScreen: ', ship, tracks)
        return (
            <SeaBackground>
                <View style={Styles.Boxes}>
                    <View style={Styles.ShipHeader}>
                        <Text>
                            <Text style={Styles.BigTextPirate}>Captain Barbosa </Text>
                            <Image source={PiratePNG} style={ Styles.CaptainIconMedium } />
                        </Text>
                    </View>

                    <View style={Styles.NowPlaying}>
                        <Player ship={ship} tracks={tracks} updateCurrentTrack={this.props.screenProps.updateCurrentTrack.bind(this)}/>
                    </View>

                    <View style={Styles.Playlist}>
                        <Text style={Styles.BigTextPirate}>{ship.name}{'\n'}</Text>
                        <ScrollView style={Styles.TrackListContainer}>
                            <TrackList tracks={this.props.screenProps.tracks} ship={this.props.screenProps.ship} updateCurrentTrack={this.props.screenProps.updateCurrentTrack}/>
                        </ScrollView>
                    </View>
                </View>
                <View style={Styles.Footer}>
                    <BottomNav navigation={this.props.navigation}/>
                </View>
            </SeaBackground>
        )
    }
}