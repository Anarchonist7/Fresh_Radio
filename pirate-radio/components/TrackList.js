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
                <TouchableOpacity onPress={(index) => {this.skip(index)} }>
                <View style={{paddingVertical: 3}}>
                    <View key={i} style={[Styles.TrackList, !track.localUrl ? Styles.Off : [], active ? Styles.Active : []]}>
                        <View>
                            <Text style={Styles.MediumTextNormal}>
                                <SimpleLineIcons style={Styles.SmallWhiteIcon} name="anchor"/>
                                {track.title}
                            </Text>
                        </View>
                        <View style={{paddingRight: '5%'}}>
                            <AntDesign name='sound' style={active ? Styles.ActiveIcon : Styles.OffIcon}/>
                        </View>
                    </View>
                    <View key={i} style={[Styles.TrackList, !track.localUrl ? Styles.Off : [], active ? Styles.Active : []]}>
                        <Text style={Styles.TinyTextNormal}>
                            By {track.artist}{}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
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