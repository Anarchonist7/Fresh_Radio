import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
} from 'react-native';
import Header from './Header';
import AlbumArt from './AlbumArt';
import TrackDetails from './TrackDetails';
import SeekBar from './SeekBar';
import Controls from './Controls';
import { loadTrack, seek, onBack, onForward, setPlay, setStatusUpdate, account } from './functions';
import Styles from '../assets/styles/AppStyles';

import { FontAwesome } from '@expo/vector-icons';

export default class Player extends Component {

  constructor(props) {
    super(props);

    this.state = {
      paused: this.props.ship.paused,
      totalLength: 1,
      currentPosition: 0,
      currentPositionMillis: 0,
      selectedTrack: 0,
      totalLength: this.props.tracks[props.ship.currentTrack].durationMillis,
      player: new Expo.Audio.Sound(),
      tracks: props.tracks,
      loading: true,
      sync: false
    };
  }

   onPlaybackStatusUpdate = (status) => {
    // const date = Date.now();
    const positionMillis = status.positionMillis;
    console.log('---------------Status Update----------------')
      console.log('myPosition:', status.positionMillis)
      console.log('myDuration: ', status.durationMillis)
      // console.log(this.props.tracks.length, Number(this.state.selectedTrack) + 1, this.props.tracks, this.props.tracks[Number(this.state.selectedTrack + 1)])
      if (status.positionMillis === this.state.totalLength) {
        console.log('|---> end of track triggered---')
        const selectedTrack = Number(this.state.selectedTrack);
        this.state.player.stopAsync()
        this.state.player.setPositionAsync(0).then( () => {
          this.setState({
            currentPosition: 0,
            currentPositionMillis: 0,
            paused: false,
            totalLength: this.props.tracks[selectedTrack + 1].durationMillis,
            isChanging: false,
            player: new Expo.Audio.Sound(),
            selectedTrack: selectedTrack + 1,
          }, () => this.props.updateCurrentTrack(selectedTrack, this.state.date, 0, this.state.paused))
        })
      } else {
        this.setState({
          currentPosition: Math.floor(status.positionMillis / 1000),
          currentPositionMillis: this.state.positionMillis,
          totalLength: this.props.tracks[this.state.selectedTrack].durationMillis,
          paused: this.state.paused,
          date: Date.now()
        }, () => this.props.updateCurrentTrack(this.state.selectedTrack, this.state.date, positionMillis, this.state.paused))
      }
      console.log('-------------------------------------')
    }

  componentDidMount() {
    console.log('|---> componentDidMount')
    loadTrack(this).then(() => {

      setStatusUpdate(this)
    })
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('|---> componentDidUpdate')
    if (this.state.selectedTrack !== prevState.selectedTrack || this.props.tracks[this.state.selectedTrack].localUrl !== prevProps.tracks[this.state.selectedTrack].localUrl) {
      console.log('|--? selectedTrack change || loaclurl Loaded')
      loadTrack(this).then(() => {
        console.log('syncing to position....')
        this.state.player.setPositionAsync(Math.floor(account(this.props.ship, this.props.tracks).currentPositionMillis)).then(() => {
          setStatusUpdate(this).then(() => {
            setPlay(this)
          })
        })
      })
    }
<<<<<<< HEAD
    // if (this.state.loading === false && this.state.sync === false) {
    //   console.log('|--? initial sync && non-0 intial position')
    //   console.log('This is the return value of our function: ', account(this.props.ship, this.props.tracks))
    //     this.setState({
    //       sync: true,
    //       currentPositionMillis: account(this.props.ship, this.props.tracks).currentPositionMillis,
    //       currentTrack: account(this.props.ship, this.props.tracks).currentTrack
    //     }).then(() => {
    //       this.loadTrack(this)
    //     }).then (() => {
    //       this.state.player.setPositionAsync(Math.floor(this.state.currentPositionMillis))
    //     }).then (() => {
    //         setStatusUpdate(this)
    //     }).then(() => {
    //         setPlay(this)
    //     })
    // }
=======
    if (this.props.ship.currentPositionMillis !== 0 && this.state.loading === false && this.state.sync === false) {
      console.log('|--? initial sync && non-0 intial position')
      this.state.player.stopAsync()
        this.setState({
          sync: true,
          currentPosition: Math.floor(account(this.props.ship, this.props.tracks).currentPositionMillis / 1000),
          currentPositionMillis: Math.floor(account(this.props.ship, this.props.tracks).currentPositionMillis),
          selectedTrack: account(this.props.ship, this.props.tracks).currentTrack,
          player: new Expo.Audio.Sound()
        }, () => this.state.player.setPositionAsync(Math.floor(account(this.props.ship, this.props.tracks).currentPositionMillis)).then(() => {
          setStatusUpdate(this).then(() => {
            setPlay(this)
          })
        })
        )
      }
>>>>>>> 65c83c0e861a4987c7604a41ce6ac6fc5404f5a8
  }

  componentWillUnmount() {
    this.state.player.unloadAsync();
  }

  render() {
    const track = this.props.tracks[this.state.selectedTrack];
    const totalLength = Math.floor(this.state.totalLength / 1000);
    return (
      <View>
        <TrackDetails title={track.title} artist={track.artist} album={track.album}/>
        <SeekBar
          onSeek={this.seek = seek.bind(this)}
          trackLength={totalLength}
          currentPosition={this.state.currentPosition || 0} />
        <Controls
          forwardDisabled={this.state.selectedTrack === this.props.tracks.length - 1}
          backDisabled={this.state.selectedTrack === 0}
          playDisabled={(track.localUrl !== null) === false}
          onPressPlay={() => {
            this.setState({paused: false})
            this.state.player.playAsync();
            }
          }
          onPressPause={() => {
            this.setState({paused: true})
            this.state.player.pauseAsync()
            }
          }
          onBack={this.onBack = onBack.bind(this)}
          onForward={this.onForward = onForward.bind(this)}
          paused={this.state.paused}/>
      </View>
    );
  }
}