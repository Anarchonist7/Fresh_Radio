import React, { Component } from 'react';

import Styles from '../assets/styles/AppStyles';

const PirateShipPNG = require('../assets/images/pirate-ship-2.png');
const PirateShipGIF = require('../assets/images/rocking-ship.gif');


import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import TextTicker from 'react-native-text-ticker'

const TrackDetails = ({
  title,
  artist,
  album,
  paused,
  onAddPress,
  onMorePress,
  onTitlePress,
  onArtistPress,
}) => (
  <View style={Styles.TrackDetailsContainer}>
    <View style={Styles.TrackDetailsSongInfo}>
      <View style={{width: '100%'}}>
        <TextTicker marqueeOnMount={false} bounce={true} loop={true} scroll={true} style={Styles.TrackDetailsPrimaryText}>{title}</TextTicker>
      </View>
      <View style={{width: '100%', opacity: 0.72}}>
        <TextTicker marqueeOnMount={false} bounce={false} loop={false} scroll={true} style={Styles.TrackDetailsSecondaryText}>{album}</TextTicker>
        <TextTicker marqueeOnMount={false} bounce={false} loop={false} scroll={true} style={Styles.TrackDetailsSecondaryText}>{artist}</TextTicker>
      </View>
    </View>
    <View style={Styles.TrackDetailsShipIconContainer}>
      {paused ? (
        <Image source={PirateShipPNG} style={Styles.PirateShipIcon} />
      ) : (
        <Image source={PirateShipGIF} style={Styles.PirateShipIcon} />
      )}
    </View>
  </View>
);

export default TrackDetails;