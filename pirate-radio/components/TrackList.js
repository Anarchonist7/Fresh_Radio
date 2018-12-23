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
            trackComponentArray.push(<Text key={i} style={[styles.smallText, !track.localUrl ? styles.off : [], active ? styles.active : []]}>{track.title} by {track.artist}</Text>)
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