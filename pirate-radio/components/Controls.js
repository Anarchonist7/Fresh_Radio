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
    {/* <TouchableOpacity activeOpacity={0.0} onPress={onPressShuffle}>
      <Image style={[Styles.ControlsSecondaryControl, shuffleOn ? [] : Styles.ControlsOff]}
        source={require('../img/ic_shuffle_white.png')}/>
    </TouchableOpacity> */}

    <View style={{width: 40}} />
    <TouchableOpacity onPress={onBack}
      disabled={backDisabled}>
      <Image style={[(backDisabled || playLoading) && {opacity: 0.3}]}
      source={require('../img/ic_skip_previous_white_36pt.png')}/>
    </TouchableOpacity>

    <View style={{width: 20}} />
    {!paused ?
      <TouchableOpacity onPress={onPressPause}>
        <View style={Styles.ControlsPlayButton}>
        { playLoading ?  <BarIndicator color='white' /> : <Image source={require('../img/ic_pause_white_48pt.png')}/> }
        </View>
      </TouchableOpacity> :
      <TouchableOpacity onPress={onPressPlay} disabled={playDisabled}>
        <View style={[Styles.playButton, playDisabled ? Styles.ControlsOff : []]}>
        { playLoading ?  <BarIndicator color='white'/> : <Image source={require('../img/ic_play_arrow_white_48pt.png')}/> }
        </View>
      </TouchableOpacity>
    }

    <View style={{width: 20}} />
    <TouchableOpacity onPress={onForward}
      disabled={forwardDisabled}>
     <Image style={[(forwardDisabled || playLoading) && {opacity: 0.3}]}
      source={require('../img/ic_skip_next_white_36pt.png')}/>
    </TouchableOpacity>

    <View style={{width: 40}} />
    {/* <TouchableOpacity activeOpacity={0.0} onPress={onPressRepeat}>
      <Image style={[Styles.ControlsSecondaryControl, repeatOn ? [] : Styles.ControlsOff]}
        source={require('../img/ic_repeat_white.png')}/>
    </TouchableOpacity> */}
  </View>
);

export default Controls;