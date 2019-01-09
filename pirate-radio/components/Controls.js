import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';

import {BarIndicator} from 'react-native-indicators';

import Styles from '../assets/styles/AppStyles';


const Controls = ({
  paused,
  shuffleOn,
  repeatOn,
  onPressPlay,
  onPressPause,
  onBack,
  onForward,
  onPressShuffle,
  onPressRepeat,
  forwardDisabled,
  backDisabled,
  playDisabled,
  forwardLoading,
  backLoading,
  playLoading,

}) => (
  <View style={Styles.ControlsContainer}>
    <View>
      <TouchableOpacity onPress={onBack} disabled={backDisabled}>
        <Image style={[Styles.ControlSeekIcons, (backDisabled || playLoading) && {opacity: 0.3}]} source={require('../img/ic_skip_previous_white_36pt.png')}/>
      </TouchableOpacity>
    </View>

    <View>
    {!paused ? (
      <TouchableOpacity onPress={onPressPause}>
        <View style={Styles.ControlsPlayButton}>
          { playLoading ? (
          <BarIndicator color='white' style={Styles.ControlPlayIcons} /> 
          ) : (
          <Image source={require('../img/ic_pause_white_48pt.png')} style={Styles.ControlPlayIcons}/> 
          )}
        </View>
      </TouchableOpacity> 
    ) : (
      <TouchableOpacity onPress={onPressPlay} disabled={playDisabled}>
        <View style={[playDisabled ? Styles.ControlsOff : []]}>
        { playLoading ?  <BarIndicator color='white'/> : <Image source={require('../img/ic_play_arrow_white_48pt.png')} style={Styles.ControlPlayIcons}/> }
        </View>
      </TouchableOpacity>
    )}
    </View>

    <View>
    <TouchableOpacity 
    onPress={onForward}
    disabled={forwardDisabled}>
      <Image 
      style={[Styles.ControlSeekIcons,(forwardDisabled || playLoading) && {opacity: 0.3}]}
      source={require('../img/ic_skip_next_white_36pt.png')}/>
    </TouchableOpacity>
    </View>
  </View>
);

export default Controls;