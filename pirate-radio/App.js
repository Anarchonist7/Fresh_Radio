import React, { Component } from 'react';
import { Platform, StatusBar, View, Text, Dimensions } from 'react-native';

import { AppLoading, Asset, FileSystem, Font, Icon } from 'expo';

import LandingScreen from './screens/LandingScreen';
import AppNavigator from './navigation/AppNavigator';
import SocketIOClient from 'socket.io-client';
import shorthash from 'shorthash'
import Listener from './components/Listener';

// import Player from './components/Player';

import EStyleSheet from 'react-native-extended-stylesheet';
const { width, height } = Dimensions.get('window');
let rem = 14;
if (width > 768) {
  rem = 45;
} else if (width > 414) {
  rem = 26;
} else if (width > 375) {
  rem = 18;
} else if (width > 320) {
  rem = 16;
}

EStyleSheet.build({
  $rem: rem
});

import ENV from './env'
const PORT = ENV.REST_PORT || 8080;
const LOCALHOST = ENV.LOCALHOST || 'http://localhost';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.socket = SocketIOClient(LOCALHOST + ':' + ENV.SOCKET_PORT);
    this.state = {
      shipLoading: true,
      fontLoading: true,
      isMuted: false,
      count: 0,
      request: false,
      ship: {
        name: '',
        id: 1,
        currentTrack: null,
        currentPositionMillis: 0,
        duration: null,
        timeStamp: null,
        paused: true,
      },
      captain: null
    }
    this.socket.onopen = () => {
      this.setState({connected:true})
    };
  }

  shipRequest = LOCALHOST + ':' + PORT + '/ships/1';
  shipQueryRequest = LOCALHOST + ':' + PORT + '/ships/';
  captainIdRequest = LOCALHOST + ':' + PORT + '/captain/find/';
  captainRequest = LOCALHOST + ':' + PORT + '/captain/';
  createNewShipRequest = LOCALHOST + ':' + PORT + '/captains/:id/ships';

  sendMessage = (message, time, MS) => {
    console.log('------message: ', message, time)
    this.socket.send(JSON.stringify({type: 'message', content: message, time: time, MS: MS || 0}));
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
          this.setState({tracks: [
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
            this.setState({tracks: [
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
    }, () => {
      if(this.state.ship.currentTrack === index){
        this.setState({loading: false})
        }
    })
  }

  downloadAllTracksFromShip = () => {
    return new Promise((resolve, reject) => {
      this.state.tracks.forEach((track, index) => {
          this.downloadTrack(index)
      })
      resolve()
    })
  }

  loadTrack = (index) => {
    console.log('TRYING TO LOAD: ', this.state.tracks[index].audioUrl)
    const localfilepath = Expo.FileSystem.documentDirectory + shorthash.unique(this.state.tracks[index].audioUrl) + '.mp3'
    Expo.FileSystem.getInfoAsync(localfilepath).then(({ exists }) => {
      if (exists) {
        Expo.FileSystem.getInfoAsync(Expo.FileSystem.documentDirectory + shorthash.unique(this.state.tracks[index].audioUrl) + '.mp3')
        .then(({ uri }) => {
          const start = this.state.tracks.slice(0, index);
          const end = this.state.tracks.slice(index + 1);
          this.setState({tracks: [
            ...start,
            {
              ...this.state.tracks[index],
              localUrl: uri
            },
            ...end
            ]}, () => console.log('Async load (file exists) of track ID:', this.state.tracks[index].id, 'complete.')
          )
        })
        .catch(error => {
          console.error('DOWNLOAD ERROR: ', error);
        });
      } else if (this.state.ship.currentTrack === index || this.state.ship.currentTrack + 1 === index) {
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', this.state.tracks[this.state.ship.currentTrack])
        console.log('!!!!!!!!!!~~~~~~~', this.state.tracks[index].audioUrl)
        Expo.FileSystem.downloadAsync(
          this.state.tracks[index].audioUrl,
          Expo.FileSystem.documentDirectory + shorthash.unique(this.state.tracks[index].audioUrl) + '.mp3'
        )
          .then(({ uri }) => {
            const start = this.state.tracks.slice(0, index);
            const end = this.state.tracks.slice(index + 1);
            this.setState({tracks: [
              ...start,
              {
                ...this.state.tracks[index],
                localUrl: uri
              },
              ...end
              ]}, () => console.log('Async download of track ID:', this.state.tracks[index].id, 'complete.')
            )
          })
          .catch(error => {
            console.error('DOWNLOAD ERROR: ', error, index);
          });
      }
    }, () => {
      if(this.state.ship.currentTrack === index){
        this.setState({loading: false})
        }
    })
  }

  loadAllTracksFromShip = () => {
    return new Promise((resolve, reject) => {
      this.state.tracks.forEach((track, index) => {
        this.loadTrack(index)
      })
      resolve()
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

  getShip = (index) => {
    return new Promise((resolve, reject) => {
      console.log('festching: ', this.shipQueryRequest + index);
      fetch(this.shipQueryRequest + index, {
      method: 'GET'
      }).then((responseData, error) => {
        if (error){
          throw new Error("Error: ", error);
        } else {
          const response = JSON.parse(responseData._bodyText)
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
          resolve(data);
        }
      })
    })
    if (this.state.currentTrack !== this.state.ship.currentTrack) {
      console.log('--------------------MISMATCH!!!!!!')
      // this.setState({
      //     currentTrack: this.state.ship.currentTrack
      // })
    }
  }

  getCaptain = (id) => {
    return new Promise((resolve, reject) => {
      console.log('GETCAPP')
      console.log(this.captainRequest + id)
      fetch(this.captainRequest + id, {
        method: 'GET'
        }).then((responseData, error) => {
          if (error){
            throw new Error("Error: ", error);
          } else {
            const response = JSON.parse(responseData._bodyText)
            resolve(response[0]);
          }
        })
    })
  }

  getYeOldShips = (id) => {
    return new Promise((resolve, reject) => {
      console.log(this.captainRequest + id)
      fetch(this.captainRequest + id + '/ships', {
        method: 'GET'
        }).then((responseData, error) => {
          if (error){
            throw new Error("Error: ", error);
          } else {
            const response = JSON.parse(responseData._bodyText)
            console.log('Response from get captin SHIPS in app:', response)
            resolve(response);
          }
        })
    })
  }

  authCaptain = (email, password) => {
    return new Promise((resolve, reject) => {
      fetch(this.captainIdRequest + email, {
        method: 'GET'
        }).then((responseData, error) => {
          if (error){
            throw new Error("Error: ", error);
          } else {
            const response = JSON.parse(responseData._bodyText)
            resolve(response[0].id);
          }
        })
    })
  }

  loadShip = (id) => {
    return new Promise((resolve, reject) => {
      this.getShip(id).then((response) => {
        this.setState({
          tracks: response.tracks,
          ship: response.ship,
          captain: response.captain,
          shipLoading: false
        })
        resolve(this.state)
      })
    })
  }

  muteOrUnmute = () => {
    if (this.state.isMuted){
      this.setState({
        isMuted: false
      })
    } else {
      this.setState({
        isMuted: true
      })
    }
  }

  resetMute = () => {
    this.setState({
      isMuted: false
    })
  }

  resetReq = () => {
    this.setState({
      request: false
    }, () => console.log('the request now: ', this.state.request))
  }

  componentDidMount() {
    console.log('------!! component is mountin in app.js!')
    this.socket.on('message', (message) => {
       console.log('heres my message back from socket: ', message);
       let data = JSON.parse(message);
       if (data.type === 'message') {
         this.setState({
           paused: data.content,
           CT: data.CT,
           ST: data.ST,
           MS: data.MS || 0
         })
       } else if (data.type === 'next') {
         this.setState({
          ship: {
              ...this.state.ship,
              currentTrack: data.content
            }
         })
       } else if (data.type === 'count') {
          this.setState({count: data.content})
       //  if (data.content === 'ahoy!') {
       //     this.setState({
       //       count: this.state.count + 1
       //     }, () => console.log('HEY-----ITS THE COUNT: ', this.state.count));
       //   } else {
       //      this.setState({
       //        count: this.state.count - 1
       //    }, () => console.log('HEY----ITS THE COUNT: ', this.state.count));
       //   }
       // } else if (data.type === 'request') {
       //    this.setState({
       //      request: true
       //    }, () => console.log('HEY ---- YALL GOT A REQUEST BOII!'));
       // }
     }

     if (data.type === 'request') {
        this.setState({ request: true })
       }
    });

    Font.loadAsync({
      'BlackPearl': require('./assets/fonts/BlackPearl.ttf'),
    }).then(() => {
      setTimeout(() => {
        return this.setState({
          fontLoading: false
        });
      }, 3000);
    })
  }

  componentDidUpdate(){
    console.log("APP.JS IS MUTED: ", this.state.isMuted);
  }

  render() {
    const screenProps = {
      authCaptain: this.authCaptain,
      captain: this.state.captain,
      createNewShipRequest: this.createNewShipRequest,
      downloadTrack: this.downloadTrack,
      downloadTracks: this.downloadAllTracksFromShip,
      getCaptain: this.getCaptain,
      getShip: this.getShip,
      getYeOldShips: this.getYeOldShips,
      isMuted: this.state.isMuted,
      loadTracks: this.loadAllTracksFromShip,
      loadTrack: this.loadTrack,
      loadShip: this.loadShip,
      muteOrUnmute: this.muteOrUnmute,
      paused: this.state.paused,
      resetMute: this.resetMute,
      sendMessage: this.sendMessage,
      ship: this.state.ship,
      shipLoading: this.state.shipLoading,
      shipQueryRequest: this.shipQueryRequest,
      tracks: this.state.tracks,
      updateCurrentTrack: this.updateCurrentTrack,
      updateShip: this.updateShip,
      getShip: this.getShip,
      shipLoading: this.state.shipLoading,
      sendMessage: this.sendMessage,
      paused: this.state.paused,
      muteOrUnmute: this.muteOrUnmute,
      resetMute: this.resetMute,
      isMuted: this.state.isMuted,
      CT: this.state.CT,
      ST: this.state.ST,
      MS: this.state.MS,
      count: this.state.count,
      request: this.state.request,
      resetReq: this.resetReq
    }

    if (this.state.fontLoading === true) {
      return <LandingScreen />
    } else {
      return <AppNavigator screenProps={screenProps}/>
    }
  }
}


