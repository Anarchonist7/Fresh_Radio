import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { BottomNav } from '../components/BottomNav';
import shorthash from 'shorthash'
import { SeaBackground } from '../components/SeaBackground';
import Listener from '../components/Listener';
import Styles from '../assets/styles/AppStyles';

import Player1 from '../components/Player.1';
import TrackList from '../components/TrackList';

import TextTicker from 'react-native-text-ticker'

import { MaterialIcons } from '@expo/vector-icons';

const PiratePNG = require('../assets/images/pirate.png');

export default class ShipCrewScreen extends React.Component {

    static NavigationOptions = { header: { visibile: false } };
    constructor(props){
        super(props)
        this.state = {
            shipId: this.props.navigation.getParam('shipId', null),
            isDownloading: false,
            isSyncing: false
        }
    }

    download = () => {
        this.setState({
            isDownloading: true
        }, () => this.props.screenProps.downloadTracks(this.state.shipId))
        setTimeout(() => this.setState({isDownloading: false}), 3000)
    }

    requestSync = () => {
        this.setState({isSyncing: true}, () => {

            //SYNC REQUEST CODE GOES HERE

        })
        setTimeout(() => this.setState({isSyncing: false}), 3000)
    }

    componentDidUpdate(prevProps, prevState){
        if (this.props.screenProps.ship.currentTrack !== prevProps.screenProps.ship.currentTrack) {
            this.props.screenProps.loadTracks()
        }
    }

    componentDidMount() {
        this.props.screenProps.loadShip(this.state.shipId).then(() => {
            this.props.screenProps.loadTracks().then(() => {
            })
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
                            <View style={Styles.ShipHeader}>
                                <Image source={PiratePNG} style={Styles.CaptainIconMedium}/>
                                <View>
                                    <TextTicker style={Styles.CaptainHeaderText} duration={8000} marqueeOnMount loop bounce>
                                        {captain.captainName}
                                    </TextTicker>
                                </View>

                                {/* <TouchableOpacity onPress={
                                    this.props.screenProps.downloadTracks(this.state.shipId)
                                    this.setState({
                                        isDownloading: true
                                    })
                                    }>
                                    <View>
                                        <MaterialIcons name="file-download" style={Styles.LogoutIcon}/>
                                    </View>
                                </TouchableOpacity> */}

                            </View>

                            <View style={Styles.NowPlayingCrew}>
                            <Player1 MS={this.props.screenProps.MS} currentTrack={this.props.screenProps.currentTrack} ship={ship} tracks={tracks} sendMessage={this.props.screenProps.sendMessage} isMuted={this.props.screenProps.isMuted} paused={this.props.screenProps.paused} CT={this.props.screenProps.CT} ST={this.props.screenProps.ST} updateCurrentTrack={this.props.screenProps.updateCurrentTrack.bind(this)}/>
                                <View style={Styles.SpaceBetween}>
                                { this.state.isDownloading ?  <ActivityIndicator /> : (
                                        <TouchableOpacity
                                        onPress={this.download}
                                        style={Styles.DownloadButton}>
                                            <Text>
                                                DOWNLOAD
                                            </Text>
                                        </TouchableOpacity>
                                    )
                                }
                                { this.state.isSyncing ? <ActivityIndicator /> : (
                                        <TouchableOpacity
                                            onPress={this.requestSync}
                                            style={Styles.SyncButton}>
                                            <Text>
                                                REQUEST SYNC
                                            </Text>
                                        </TouchableOpacity>
                                    )
                                }
                                </View>
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
