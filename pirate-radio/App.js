import React, { Component } from 'react';


import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';


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
      audioUrl: 'http://russprince.com/hobbies/files/13%20Beethoven%20-%20Fur%20Elise.mp3',
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
  componentDidMount() {
    Expo.FileSystem.downloadAsync(
      this.state.tracks[0].audioUrl,
      Expo.FileSystem.documentDirectory + 'Elise.mp3'
    )
      .then(({ uri }) => {
        console.log('Finished downloading to ', uri);
        const index = 0;
        const start = this.state.tracks.slice(0, index);
        const end = this.state.tracks.slice(index + 1);
        this.setState({loading: false, tracks: [
          ...start,
          {
            ...this.state.tracks[index],
            localFile: uri
          },
          ...end
          ]}, () => console.log(this.state.tracks))
      })
      .catch(error => {
        console.error(error);
      });
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