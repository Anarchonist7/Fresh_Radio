import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
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
        this.state = {
            loading: true
        }
    }

    shipId = this.props.navigation.getParam('shipId', null);

    downloadTrack = (index) => {
    console.log('TRYING TO DL: ', this.state.tracks[index].audioUrl)
    const localfilepath = Expo.FileSystem.documentDirectory + shorthash.unique(this.state.tracks[index].audioUrl) + '.mp3'
    Expo.FileSystem.getInfoAsync(localfilepath).then(({ exists }) => {
      if (exists) {
        Expo.FileSystem.getInfoAsync(Expo.FileSystem.documentDirectory + shorthash.unique(this.state.tracks[index].audioUrl) + '.mp3')
        .then(({ uri }) => {
          const start = this.state.tracks.slice(0, index);
          const end = this.state.tracks.slice(index + 1);
          this.setState({loading: false, tracks: [
            ...start,
            {
              ...this.state.tracks[index],
              localUrl: uri
            },
            ...end
            ]}, () => console.log('Async load (file exists) of track ID:', this.state.tracks[index].id, 'complete.'))
        })
        .catch(error => {
          console.error('DOWNLOAD ERROR: ', error);
        });
      } else {
        Expo.FileSystem.downloadAsync(
          this.state.tracks[index].audioUrl,
          Expo.FileSystem.documentDirectory + shorthash.unique(this.state.tracks[index].audioUrl) + '.mp3'
        )
          .then(({ uri }) => {
            const start = this.state.tracks.slice(0, index);
            const end = this.state.tracks.slice(index + 1);
            this.setState({loading: false, tracks: [
              ...start,
              {
                ...this.state.tracks[index],
                localUrl: uri
              },
              ...end
              ]}, () => console.log('Async download of track ID:', this.state.tracks[index].id, 'complete.'))
          })
          .catch(error => {
            console.error('DOWNLOAD ERROR: ', error);
          });
      }
    })
  }

    componentDidMount() {
        this.props.screenProps.getShip(this.shipId).then((response) => {
            // console.log('SHIPCREWSCREEN RESPONSE!!!!!', response)
            // console.log('---THE DATA THAT WORKS: ', this.props.screenProps)
            this.setState({
                captain: response.captain,
                ship: response.ship,
                tracks: response.tracks
            }, () => {
               this.state.tracks.forEach((track, index) => {
                this.downloadTrack(index)
            })
               this.setState({loading: false})
               console.log('--------the state of my tracks: ', this.state.tracks)
            })
        });
    }

    render() {

        const { ship, tracks, captain } = this.state;

        if (this.state.loading === true){
            console.log('-----------LOADING-----------')
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
