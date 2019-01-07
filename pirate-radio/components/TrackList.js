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


import Track from './Track'

import { AntDesign } from '@expo/vector-icons';

export default class TrackList extends React.Component {


    constructor(props){
        super(props)
        this.state = {
            trackList: []
        }
    }

    skip = (index) => {
        console.log('morty', index)
    }

    generateTrackList(){
        let trackComponentArray = []
        this.props.tracks.forEach((track, index) => {
            let active = (index === this.props.ship.currentTrack )
            trackComponentArray.push(
              <Track track={track} index={index} active={active}/>
            )
        })
        return trackComponentArray
    }

    onComponentDidMount(){
        this.generateTrackList()
    }

    onComponentDidUpdate(){
    }

    render(){
        return (
            this.generateTrackList()
        )
    }

}