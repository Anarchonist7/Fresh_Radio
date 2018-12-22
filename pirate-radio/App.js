import React, { Component } from 'react';

import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';

import CaptainScreen from './screens/CaptainScreen';
import HomeScreen from './screens/HomeScreen';
import LandingScreen from './screens/LandingScreen';
import ListenHostScreen from './screens/ListenHostScreen';
import LoginRegisterScreen from './screens/LoginRegisterScreen';
import SearchScreen from './screens/SearchScreen';
import ShipCaptainScreen from './screens/ShipCaptainScreen';
import ShipCrewScreen from './screens/ShipCrewScreen';


import shorthash from 'shorthash'

import Player from './components/Player';


export default class App extends Component {

  constructor(props) {
    super(props) 
    this.state = {loading: true}
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
              localUrl: uri
            },
            ...end
            ]}, () => console.log('Async download complete for track ID:', this.state.tracks[index].id))
        })
        .catch(error => {
          console.error('DOWNLOAD ERROR: ', error);
        });
      }
    
  ship = "http://localhost:8080/ships/1";
    
  getShip = new Promise((resolve, reject) => {
      fetch(this.ship, {
      method: 'GET'
      }).then((responseData, error) => {
        if (error){
          throw new Error("Error: ", error);
        } else {
          const response = JSON.parse(responseData._bodyText)
          tracksResponse = JSON.parse(responseData._bodyText);
          const tracks = tracksResponse.tracks.map(track => {
            return {
              ...track,
              localUrl: null
            }
          })
          resolve(tracks);
        }
      })
    })

  componentDidMount() {
    this.getShip.then((tracks) => {
      this.setState({
        tracks: tracks,
        loading: false
      })
      this.state.tracks.forEach((track, index) => {
          this.downloadTrack(index)
      })
    });
  }

  render() {
    // console.log('App render triggered')
    // return (
    //   <SearchScreen />
    // )
      if (this.state.loading === true) {
        return < LandingScreen />
      } else {
        return <Player tracks={this.state.tracks}/>
      }
  }
}