import React, { Component } from 'react';
import { SimpleLineIcons } from '@expo/vector-icons';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import Styles from '../assets/styles/AppStyles';


import { AntDesign } from '@expo/vector-icons';

export default class Track extends React.Component {
  constructor(props){
        super(props)
    }

  render() {
    const track = this.props.track
    const active = this.props.active
    return (
      <TouchableOpacity>
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
  }
}