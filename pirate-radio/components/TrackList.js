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

    generateTrackList(){

        let trackComponentArray = []
        this.props.tracks.forEach((track, index) => {
            let active = (index === this.props.ship.currentTrack )
                if (this.props.captain === 'no') {
                    trackComponentArray.push( <View key={index} style={{paddingVertical: 3}}>
                    <View style={[Styles.TrackList, !track.localUrl ? Styles.Off : [], active ? Styles.Active : []]}>
                        <View>
                            <Text style={Styles.SmallTextNormal}>
                                <SimpleLineIcons style={Styles.SmallIcon} name="anchor"/>
                                {track.title}
                            </Text>
                        </View>
                        <View style={{paddingRight: '5%'}}>
                            <AntDesign name='sound' style={active ? Styles.ActiveIcon : Styles.OffIcon}/>
                        </View>
                    </View>
                    <View style={[Styles.TrackList, !track.localUrl ? Styles.Off : [], active ? Styles.Active : []]}>
                        <Text style={[Styles.TinyTextNormal, {fontStyle: 'italic'}]}>
                            By {track.artist}{}
                        </Text>
                    </View>
                </View> )
                } else {
                   trackComponentArray.push (track = <Track key={index} sendMessage={this.props.sendMessage} tracks={this.props.tracks} thing={index} track={track} index={index} active={active}/>)
                }
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