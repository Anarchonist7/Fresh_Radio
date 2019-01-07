import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { BottomNav } from '../components/BottomNav';
import shorthash from 'shorthash'
import { SeaBackground } from '../components/SeaBackground';
import Listener from '../components/Listener';
import Styles from '../assets/styles/AppStyles';

import TrackList from '../components/TrackList';

import TextTicker from 'react-native-text-ticker'
import { Ionicons, Feather } from '@expo/vector-icons';

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

        const { ship, tracks, captain, shipLoading, count } = this.props.screenProps;

        if (shipLoading){
            return <SeaBackground />
        } else {
            return (
                <SeaBackground>
                        <View style={Styles.Boxes}>
                            <View style={Styles.ShipHeader}>
                                <Image source={PiratePNG} style={ Styles.MediumIcon } />
                                <View style={Styles.CaptainHeaderTickerContainer}>
                                    <TextTicker style={Styles.CaptainHeaderText} duration={8000} marqueeOnMount loop bounce>
                                        {captain.captainName}
                                    </TextTicker>
                                </View>
                                <Text style={Styles.CaptainHeaderText}>
                                    {count} <Feather name="headphones" style={ Styles.CaptainHeaderText} />
                                </Text>
                            </View>

                            <View style={Styles.NowPlayingCrew}>
                                <Listener 
                                count={this.props.screenProps.count} 
                                MS={this.props.screenProps.MS} 
                                currentTrack={this.props.screenProps.currentTrack} 
                                ship={ship} tracks={tracks} 
                                sendMessage={this.props.screenProps.sendMessage} 
                                isMuted={this.props.screenProps.isMuted} 
                                paused={this.props.screenProps.paused} 
                                CT={this.props.screenProps.CT} 
                                ST={this.props.screenProps.ST} 
                                updateCurrentTrack={this.props.screenProps.updateCurrentTrack.bind(this)}/>
                                    <View style={Styles.NowPlayingButtonsContainer}>
                                        { this.state.isDownloading ?  <ActivityIndicator style={Styles.DownloadButton}/> : (
                                                <TouchableOpacity
                                                onPress={this.download}
                                                style={Styles.DownloadButton}>
                                                    <Text style={Styles.TinyTextPirate}>
                                                        DOWNLOAD
                                                    </Text>
                                                </TouchableOpacity>
                                            )
                                        }
                                        { this.state.isSyncing ? <ActivityIndicator style={Styles.SyncButton}/> : (
                                                <TouchableOpacity
                                                    onPress={this.requestSync}
                                                    style={Styles.SyncButton}>
                                                    <Text style={Styles.TinyTextPirate}>
                                                        SYNc
                                                    </Text>
                                                </TouchableOpacity>
                                            )
                                        }
                                    </View>
                            </View>
                            <View style={Styles.shipCrewPlaylist}>
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
