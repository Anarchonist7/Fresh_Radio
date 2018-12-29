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
        this.state = {
            loading: true
        }
    }

    shipId = this.props.navigation.getParam('shipId', null);

    componentDidMount() {
        this.props.screenProps.getShip(this.shipId).then((response) => {
            console.log('SHIPCREWSCREEN RESPONSE!!!!!', response)
            this.setState({
                captain: response.captain,
                ship: response.ship,
                tracks: response.tracks,
                loading: false
            })
            this.state.tracks.forEach((track, index) => {
                this.props.screenProps.downloadTrack(index)
            })
        });
    }

    render() {

        const { ship, tracks, captain } = this.state;

        if (this.state.loading === true){
            return <SeaBackground />
        } else {
            return ( 
                <SeaBackground>
                        <View style={Styles.Boxes}>
                            <View style={Styles.ShipHeader}> 
                                <Text>
                                    <Text style={Styles.BigTextPirate}>Captain {captain.captainName}</Text>
                                    <Image source={PiratePNG} style={ Styles.CaptainIconMedium } />
                                </Text>
                            </View>

                            <View style={Styles.NowPlaying}>
                                <Listener tracks={tracks} ship={ship} updateCurrentTrack={this.props.screenProps.updateCurrentTrack.bind(this)}/>
                            </View>

                            <View style={Styles.Playlist}>
                                <Text style={Styles.BigTextPirate}>{ship.name}{'\n'}</Text>
                                <TrackList tracks={tracks} ship={ship} updateCurrentTrack={this.props.screenProps.updateCurrentTrack}/>
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
