import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { BottomNav } from '../components/BottomNav';
import { PirateText } from '../components/PirateText';
import Styles from '../assets/styles/AppStyles';

import { SeaBackground } from '../components/SeaBackground';
import Player from '../components/Player';
import TrackList from '../components/TrackList';


export default class ShipCaptainScreen extends React.Component {

    constructor(props){
        super(props)
    }

    static NavigationOptions = { header: { visibile: false } };

    render() {

        const {ship, tracks} = this.props.screenProps;
        // console.log('SHIP: ', this.props.screenProps)

        return (
            <SeaBackground>
                <View style={Styles.Boxes}>
                    <View style={Styles.Search}>
                        <PirateText style={Styles.BigText}>Captain Barbosa</PirateText>
                    </View>

                    <View style={Styles.NowPlaying}>
                        <Player ship={this.props.screenProps.ship} tracks={this.props.screenProps.tracks} updateCurrentTrack={this.props.screenProps.updateCurrentTrack.bind(this)}/>
                    </View>

                    <View style={Styles.Playlist}>
                        <PirateText style={Styles.BigText}>{ship.name}{'\n'}</PirateText>
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