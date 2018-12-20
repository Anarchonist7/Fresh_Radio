import React, { Component } from 'react';


import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';


import Player from './components/Player';
const tracks = [
  {
    id: 1,
    title: 'Stressed Out',
    artist: 'Twenty One Pilots',
    albumArtUrl: "http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg",
    audioUrl: 'http://localhost:8080/tune2.mp3'
  },
  {
    id: 2,
    title: 'Iron Lion Zion',
    artist: 'Bob Marley',
    albumArtUrl: "http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg",
    audioUrl: 'http://localhost:8080/tune3.mp3'
  }
]
export default class App extends Component {
  render() {
    return (
      <Player tracks={tracks} />
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'rgb(4,4,4)',
  },
}