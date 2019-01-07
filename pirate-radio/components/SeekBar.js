import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

import Slider from 'react-native-slider';

import Styles from '../assets/styles/AppStyles';

function pad(n, width, z=0) {
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

const minutesAndSeconds = (position) => ([
  pad(Math.floor(position / 60), 2),
  pad(position % 60, 2),
]);

const SeekBar = ({
  trackLength,
  currentPosition,
  onSeek,
  onSlidingStart,
}) => {
  const elapsed = minutesAndSeconds(currentPosition);
  const remaining = minutesAndSeconds(trackLength - currentPosition);
  return (
    <View style={Styles.SeekBarContainer}>
      <View style={Styles.SpaceBetween}>
        <View>
          <Text style={Styles.SeekBarText}>
            {elapsed[0] + ":" + elapsed[1]}
          </Text>
        </View>
        <View >
          <Text style={[Styles.SeekBarText]}>
            {trackLength > 1 && "-" + remaining[0] + ":" + remaining[1]}
          </Text>
        </View>
      </View>
      <Slider
        maximumValue={Math.max(trackLength, 1, currentPosition + 1)}
        onSlidingStart={onSlidingStart}
        onSlidingComplete={onSeek}
        value={currentPosition}
        style={Styles.SeekBarSlider}
        minimumTrackTintColor='#fff'
        maximumTrackTintColor='rgba(255, 255, 255, 0.14)'
        thumbStyle={Styles.SeekBarThumb}
        trackStyle={Styles.SeekBarTrack}/>
    </View>
  );
};

export default SeekBar;