import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { BottomNav } from '../components/BottomNav';
import { PirateText } from '../components/PirateText';

import { SeaBackground } from '../components/SeaBackground';
import Listener from '../components/Listener';
import Styles from '../assets/styles/AppStyles';

import Player from '../components/Player';
import TrackList from '../components/TrackList';


export default class ShipCrewScreen extends React.Component {

    static NavigationOptions = { header: { visibile: false } };

    constructor(props){
        super(props)
    }

    render() {
        const {ship, tracks} = this.props.screenProps;
        console.log('SHIP: ', this.props.screenProps)
       
        return (
            <SeaBackground>
                <View style={Styles.Boxes}>
                    <View style={Styles.Search}> 
                        <PirateText style={Styles.BigText}>Captain Barbosa</PirateText>
                    </View>

                    <View style={Styles.NowPlaying}>
                        <Player tracks={this.props.screenProps.tracks} updateCurrentTrack={this.props.screenProps.updateCurrentTrack.bind(this)}/>
                    </View>

                    <View style={Styles.Playlist}>
                        <Text style={Styles.BigText}>{ship.name}{'\n'}</Text>
                        <TrackList tracks={this.props.screenProps.tracks} ship={this.props.screenProps.ship} updateCurrentTrack={this.props.screenProps.updateCurrentTrack}/>
                    </View>
                </View>
                <View style={Styles.Footer}>
                    <BottomNav/>
                </View>
            </SeaBackground>
        )
        
    }
}
