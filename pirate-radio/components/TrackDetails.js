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
    {/* <TouchableOpacity onPress={onAddPress}>
      <Image style={Styles.TrackDetailsButton}
        source={require('../img/ic_add_circle_outline_white.png')} />
    </TouchableOpacity> */}
    <View style={Styles.TrackDetailsSongInfo}>
      <TextTicker duration={8000} style={Styles.TrackDetailsTickerText} marqueeOnMount loop bounce>{title}</TextTicker>
      <Text style={Styles.TrackDetailsAlbumText}>{album}</Text>
      <Text style={Styles.TrackDetailsArtistText} onPress={onArtistPress}>{artist}</Text>
    </View>
    <View>
      {paused ? (
        <Image source={PirateShipPNG} style={Styles.PirateShipIcon} />
      ) : (
        <Image source={PirateShipGIF} style={Styles.PirateShipIcon} />
      )}
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