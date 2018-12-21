import React, { Component } from 'react';


import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import shorthash from 'shorthash'


import Player from './components/Player';


export default class App extends Component {
  state = {
  loading: true,

  tracks: [
    {
      id: 1,
      title: 'Stressed Out',
      artist: 'Twenty One Pilots',
      albumArtUrl: "http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg",
      audioUrl: 'https://www.robpapen.com/dmdocuments/Noisia_RAW_Synth_Demosong_Exiled.mp3',
      localFile: ''
    },
    {
      id: 2,
      title: 'Iron Lion Zion',
      artist: 'Bob Marley',
      albumArtUrl: "http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg",
      audioUrl: 'http://russprince.com/hobbies/files/13%20Beethoven%20-%20Fur%20Elise.mp3',
      localFile: ''
    }
  ]
}

downloadTrack = (index) => {
  Expo.FileSystem.downloadAsync(
      this.state.tracks[index].audioUrl,
      Expo.FileSystem.documentDirectory + shorthash.unique(this.state.tracks[index].audioUrl) + '.mp3'
    )
      .then(({ uri }) => {
        const start = this.state.tracks.slice(0, index);
        const end = this.state.tracks.slice(index + 1);
        this.setState({loading: false, tracks: [
          ...start,
          {
            ...this.state.tracks[index],
            localFile: uri
          },
          ...end
          ]}, () => console.log('Async download complete', index, this.state.tracks))
      })
      .catch(error => {
        console.error(error);
      });
    }

  componentDidMount() {

    this.state.tracks.forEach((track, index) => {
      this.downloadTrack(index)
    })
  }

  render() {
    if (this.state.loading === true) {
      return <Text>Loading...</Text>
    } else {
      return <Player tracks={this.state.tracks} />
    }
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'rgb(4,4,4)',
  },
}