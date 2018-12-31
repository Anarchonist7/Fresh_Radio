import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';

import { AppLoading, Asset, FileSystem, Font, Icon } from 'expo';

import LandingScreen from './screens/LandingScreen';
import AppNavigator from './navigation/AppNavigator';

import shorthash from 'shorthash'
import Listener from './components/Listener';
// import Player from './components/Player';

//THESE ARE NOT WORKING......... all get || used   TODO: impliment env in react native
const ENV = process.env.ENV || "development";
const PORT = process.env.PORT || 8080;

const LOCALHOST = process.env.LOCALHOST || 'http://localhost';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      shipLoading: true,
      fontLoading: true,
      ship: {
        name: '',
        id: 1,
        currentTrack: null,
        currentPositionMillis: 0,
        duration: null,
        timeStamp: null,
        paused: true,
      },
      captain:  null
    }
  }

  downloadTrack = (index) => {
    console.log('TRYING TO DL: ', this.state.tracks[index].audioUrl)
    const localfilepath = Expo.FileSystem.documentDirectory + shorthash.unique(this.state.tracks[index].audioUrl) + '.mp3'
    Expo.FileSystem.getInfoAsync(localfilepath).then(({ exists }) => {
      if (exists) {
        Expo.FileSystem.getInfoAsync(Expo.FileSystem.documentDirectory + shorthash.unique(this.state.tracks[index].audioUrl) + '.mp3')
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
            ]}, () => console.log('Async load (file exists) of track ID:', this.state.tracks[index].id, 'complete.'))
        })
        .catch(error => {
          console.error('DOWNLOAD ERROR: ', error);
        });
      } else {
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
              ]}, () => console.log('Async download of track ID:', this.state.tracks[index].id, 'complete.'))
          })
          .catch(error => {
            console.error('DOWNLOAD ERROR: ', error);
          });
      }
    })
  }

  updateCurrentTrack = (currentTrack, timeStamp, currentPositionMillis, paused, isListener) => {
    this.setState({
      ship: {
        ...this.state.ship,
        currentTrack: currentTrack,
        currentPositionMillis: currentPositionMillis,
        timeStamp: timeStamp,
        paused: paused
      }
    }, () => {
      if (!isListener) {
       this.updateShip()
      }
    }
    )
  }

  shipRequest = LOCALHOST + ':' + PORT + '/ships/1';
  shipQueryRequest = LOCALHOST + ':' + PORT + '/ships/';
  createNewShipRequest = LOCALHOST + ':' + PORT + '/captains/:id/ships';

  updateShip = () => {
    fetch(`${this.shipRequest}?currentTrack=${this.state.ship.currentTrack}&timeStamp=${this.state.ship.timeStamp}&currentPositionMillis=${this.state.ship.currentPositionMillis}&paused=${this.state.ship.paused}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })
    console.log('!Post to ship')
  }
  // make a post req to shipRequest with current track state

  // getShip = new Promise((resolve, reject) => {
  getShip = (index) => {
    return new Promise((resolve, reject) => {
      console.log(this.shipQueryRequest + index);
      fetch(this.shipQueryRequest + index, {
      // fetch(this.shipRequest, {
      method: 'GET'
      }).then((responseData, error) => {
        if (error){
          throw new Error("Error: ", error);
        } else {
          const response = JSON.parse(responseData._bodyText)
          // console.log("response!!!!!  ", response);
          const data = {
            captain: response.captain,
            ship: response.ship,
            tracks: response.tracks.map(track => {
              return {
                ...track,
                localUrl: null
              }
            })
          }
          console.log('!!! DATA THAT WAS FETCHED', data)
          resolve(data);
        }
      })
    })
  }

  downloadAllTracksFromShip = async (id) => {
    // return new Promise((resolve, reject) => {
      this.getShip(id).then((response) => {
        // this.getShip.then((response) => {
          // console.log('RESPONSE FROM SERVER SHIP INFO', response.ship)
          // console.log('Response from server for download', response.ship)
          this.setState({
            tracks: response.tracks,
            ship: response.ship,
            captain: response.captain,
            shipLoading: false
          })
          this.state.tracks.forEach((track, index) => {
              this.downloadTrack(index)
          })
        });
    // })
  }

  componentDidMount() {
    // this.downloadAllTracksFromShip(1)

    Font.loadAsync({
      'BlackPearl': require('./assets/fonts/BlackPearl.ttf'),
    }).then(() => this.setState({
      fontLoading: false
    }));
  }

  render() {
    const screenProps = {
      downloadTracks: this.downloadAllTracksFromShip,
      captain: this.state.captain,
      tracks: this.state.tracks,
      ship: this.state.ship,
      updateCurrentTrack: this.updateCurrentTrack,
      updateCurrentShip: this.updateCurrentShip,
      shipQueryRequest: this.shipQueryRequest,
      createNewShipRequest: this.createNewShipRequest,
      downloadTrack: this.downloadTrack,
      updateShip: this.updateShip,
      getShip: this.getShip,
      shipLoading: this.state.shipLoading
    }


    // if (this.state.loading === true ||
    if (this.state.fontLoading === true) {
      return <LandingScreen />
    } else {
      return <AppNavigator screenProps={screenProps}/>
    }
  }
}


