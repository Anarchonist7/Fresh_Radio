import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { BottomNav } from '../components/BottomNav';
import shorthash from 'shorthash'
import { SeaBackground } from '../components/SeaBackground';
import Listener from '../components/Listener';
import Styles from '../assets/styles/AppStyles';

import Player from '../components/Player';
import TrackList from '../components/TrackList';

import TextTicker from 'react-native-text-ticker'

import { MaterialIcons } from '@expo/vector-icons';

const PiratePNG = require('../assets/images/pirate.png');

export default class ShipCrewScreen extends React.Component {

    static NavigationOptions = { header: { visibile: false } };
    constructor(props){
        super(props)
    }

    componentDidMount() {
        const shipId = this.props.navigation.getParam('shipId', null);
        this.props.screenProps.loadShip(shipId).then(() => {
            this.props.screenProps.downloadTracks(shipId)
        })
    }

    render() {

        const { ship, tracks, captain, shipLoading } = this.props.screenProps;

        if (shipLoading){
            return <SeaBackground />
        } else {
            return (
                <SeaBackground>
                        <View style={Styles.Boxes}>
                            <View style={Styles.CaptainHeader}>
                                <Image source={PiratePNG} style={Styles.CaptainIconMedium}/>
                                <View style={Styles.CaptainHeaderTickerContainer}>
                                    <TextTicker style={Styles.CaptainHeaderText} duration={8000} marqueeOnMount loop bounce>
                                        Captain {captain.captainName}
                                    </TextTicker>
                                </View>
                                <MaterialIcons name="file-download" style={Styles.LogoutIcon}/>
                            </View>

                            <View style={Styles.NowPlaying}>
                                <Listener tracks={tracks} ship={ship} updateCurrentTrack={this.props.screenProps.updateCurrentTrack.bind(this)}/>
                            </View>

                            <View style={Styles.Playlist}>
                                <Text style={Styles.BigTextPirate}>{ship.name}{'\n'}</Text>
                                <View style={Styles.TrackListContainer}>
                                    <ScrollView>
                                        <TrackList tracks={tracks} ship={ship} updateCurrentTrack={this.props.screenProps.updateCurrentTrack}/>
                                    </ScrollView>
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
}
