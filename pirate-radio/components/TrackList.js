import React, { Component } from 'react';

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
            trackComponentArray.push(<Text key={i} style={[Styles.SmallText, !track.localUrl ? Styles.Off : [], active ? Styles.Active : []]}>{track.title} by {track.artist}</Text>)
        })
        return trackComponentArray
    }

    onComponentDidMount(){
        this.generateTrackList()
    }

    onComponentDidUpdate(){
    }

    render(){
        return this.generateTrackList()
    }

}