import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
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
        this.state = {
            isDownloading: false,
            isSyncing: false
        }
        // accounted = account(props.screenProps.ship, props.screenProps.tracks)
    }

    download = () => {
        this.setState({
            isDownloading: true
        }, () => this.props.screenProps.downloadTracks(this.state.shipId))
        setTimeout(() => this.setState({isDownloading: false}), 3000)
    }

    crewSync = () => {
        this.setState({isSyncing: true}, () => {

            //SYNC THE CREW CODE GOES HERE

        })
        setTimeout(() => this.setState({isSyncing: false}), 3000)
    }

    componentDidMount(){
        const shipId = this.props.navigation.getParam('shipId', null);
        this.props.screenProps.loadShip(shipId).then(() => {
            this.props.screenProps.loadTracks().then(() => {
            })
        })
    }

    componentDidUpdate(){
        console.log("!!!!SHIPCAPNSCREENEEEDUBS!!!!!!", this.props.screenProps.ship.currentTrack);
    }

    render() {
        const {ship, tracks, captain} = this.props.screenProps;
        if (this.props.screenProps.shipLoading){
            return <SeaBackground />
        } else {
            return (
                <SeaBackground>
                    <View style={Styles.Boxes}>
                        <View style={Styles.ShipCaptainHeader}>
                            <Text>
                                <Image source={PiratePNG} style={ Styles.CaptainIconMedium } />
                                <Text style={Styles.BigTextPirate}> {this.props.screenProps.captain.captainName} </Text>
                            </Text>
                        </View>

                        <View style={Styles.NowPlayingCaptain}>

                            <Player count={this.props.screenProps.count} MS={this.props.screenProps.MS} currentTrack={this.props.screenProps.currentTrack} ship={ship} tracks={tracks} sendMessage={this.props.screenProps.sendMessage} isMuted={this.props.screenProps.isMuted} paused={this.props.screenProps.paused} CT={this.props.screenProps.CT} ST={this.props.screenProps.ST} updateCurrentTrack={this.props.screenProps.updateCurrentTrack.bind(this)}/>
                                { this.state.isDownloading ?  <ActivityIndicator /> : (
                                            <TouchableOpacity
                                            onPress={this.download}>
                                                <Text>
                                                    DOWNLOAD
                                                </Text>
                                            </TouchableOpacity>
                                        )
                                    }
                                    { this.state.isSyncing ? <ActivityIndicator /> : (
                                            <TouchableOpacity
                                                onPress={this.crewSync}>
                                                <Text>
                                                    REQUEST SYNC
                                                </Text>
                                            </TouchableOpacity>
                                        )
                                    }
                        </View>

                        <View style={Styles.Playlist}>
                            <Text style={Styles.BigTextPirate}>{ship.name}{'\n'}</Text>
                            <ScrollView style={Styles.TrackListContainer}>
                                <TrackList tracks={tracks} ship={ship} updateCurrentTrack={this.props.screenProps.updateCurrentTrack}/>
                            </ScrollView>
                        </View>
                    </View>
                    <View style={Styles.Footer}>
                    <BottomNav
                        navigation={this.props.navigation}
                        muteOrUnmute={this.props.screenProps.muteOrUnmute}
                        resetMute={this.props.screenProps.resetMute}
                        isMuted={this.props.screenProps.isMuted}/>
                    </View>
                </SeaBackground>
            )
        }
    }
}