import React, { Component } from 'react';
import { SimpleLineIcons } from '@expo/vector-icons';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import Styles from '../assets/styles/AppStyles';

export default class TrackList extends React.Component {


    constructor(props){
        super(props)
        this.state = {
            trackList: []
        }
    }

    generateTrackList(){
        let trackComponentArray = []
        this.props.tracks.forEach((track, i) => {
            let active = (track.id === this.props.ship.currentTrack)
            trackComponentArray.push(
            <Text key={i} style={[Styles.SmallTextNormal, Styles.TrackList, !track.localUrl ? Styles.Off : [], active ? Styles.Active : []]}>
                <SimpleLineIcons style={Styles.SmallWhiteIcon} name="anchor"/> {track.title} by {track.artist}
            </Text>)
        })
        return trackComponentArray
    }

    onComponentDidMount(){
        this.generateTrackList()
    }

    onComponentDidUpdate(){
    }

    render(){
      console.log('current track from tracklist: ', this.props.ship.currentTrack)
        return this.generateTrackList()
    }

}