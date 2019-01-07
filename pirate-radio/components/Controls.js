import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

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
  playDisabled
}) => (
  <View style={Styles.ControlsContainer}>
    <View>
      <TouchableOpacity 
      onPress={onBack}
      disabled={backDisabled}>
          <Image 
          style={[Styles.ControlSeekIcons, backDisabled && {opacity: 0.3}]}
          source={require('../img/ic_skip_previous_white_36pt.png')}/>
      </TouchableOpacity>
    </View>

    <View>
      {!paused ? (
        <TouchableOpacity onPress={onPressPause}>
          <View style={Styles.ControlButtonContainer}>
            <Image source={require('../img/ic_pause_white_48pt.png')} style={Styles.ControlPlayIcons}/>
          </View>
        </TouchableOpacity> 
      ) : (
        <TouchableOpacity onPress={onPressPlay} disabled={playDisabled}>
          <View style={[playDisabled ? Styles.ControlsOff : []]}>
            <Image source={require('../img/ic_play_arrow_white_48pt.png')} style={Styles.ControlPlayIcons}/>
          </View>
        </TouchableOpacity>
      )}
    </View>

      <View>
        <TouchableOpacity 
        onPress={onForward}
        disabled={forwardDisabled}>
          <Image 
          style={[Styles.ControlSeekIcons, forwardDisabled && {opacity: 0.3}]}
          source={require('../img/ic_skip_next_white_36pt.png')}/>
        </TouchableOpacity>
      </View>
      {/* <View style={{width: 40}} /> */}
    {/* <TouchableOpacity activeOpacity={0.0} onPress={onPressRepeat}>
      <Image style={[Styles.ControlsSecondaryControl, repeatOn ? [] : Styles.ControlsOff]}
        source={require('../img/ic_repeat_white.png')}/>
    </TouchableOpacity> */}
  </View>
);

export default Controls;