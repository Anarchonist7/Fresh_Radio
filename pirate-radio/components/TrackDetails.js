import React, { Component } from 'react';

import Styles from '../assets/styles/AppStyles';

const PirateShipPNG = require('../assets/images/pirate-ship.png');

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
  onAddPress,
  onMorePress,
  onTitlePress,
  onArtistPress,
}) => (
  <View style={Styles.TrackDetailsContainer}>
    {/* <TouchableOpacity onPress={onAddPress}>
      <Image style={Styles.TrackDetailsButton}
        source={require('../img/ic_add_circle_outline_white.png')} />
    </TouchableOpacity> */}
    <View style={Styles.TrackDetailsWrapper}>
      <TextTicker duration={8000} style={Styles.TrackDetailsTitle} marqueeOnMount loop bounce>{title}</TextTicker>
      <Text style={Styles.TrackDetailsAlbum}>{album}</Text>
      <Text style={Styles.TrackDetailsArtist} onPress={onArtistPress}>{artist}</Text>
    </View>
    <View>
      <Image source={PirateShipPNG} style={Styles.PirateShipIcon} />
    </View>
    {/* <TouchableOpacity onPress={onMorePress}>
      <View style={Styles.TrackDetailsMoreButton}>
        <Image style={Styles.TrackDetailsMoreButtonIcon}
          source={require('../img/ic_more_horiz_white.png')} />
      </View>
    </TouchableOpacity> */}
  </View>
);

export default TrackDetails;