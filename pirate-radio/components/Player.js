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
import { loadTrack, seek, onBack, onForward, setPlay, setStatusUpdate } from './functions';
import Styles from '../assets/styles/AppStyles';

import { FontAwesome } from '@expo/vector-icons';

export default class Player extends Component {

  constructor(props) {
    super(props);

    this.state = {
      paused: this.props.ship.paused,
      totalLength: 1,
      currentPosition: Math.floor(this.props.ship.currentPositionMillis / 1000) || 0,
      currentPositionMillis: Math.floor(this.props.ship.currentPositionMillis + (Date.now() - this.props.ship.timeStamp)) || 0,
      selectedTrack: this.props.ship.currentTrack,
      totalLength: Math.floor(this.props.tracks[this.props.ship.currentTrack].durationMillis / 1000),
      player: new Expo.Audio.Sound(),
      tracks: props.tracks,
      loading: true,
      sync: false
    };
  }

   onPlaybackStatusUpdate = (status) => {
    console.log('---------------Status Update----------------')
      console.log('myPosition:', status.positionMillis)
      console.log('myDuration: ', status.durationMillis)
      if (status.positionMillis === this.state.totalLength) {
        console.log('|---> end of track triggered---')
        this.state.player.setPositionAsync(0).then( () => {
          this.state.player.stopAsync()
          this.setState({
            currentPosition: 0,
            currentPositionMillis: 0,
            paused: this.state.paused,
            totalLength: this.props.tracks[this.state.selectedTrack + 1].durationMillis,
            isChanging: false,
            player: new Expo.Audio.Sound(),
            selectedTrack: this.state.selectedTrack + 1,
          }, () => this.props.updateCurrentTrack(this.state.selectedTrack, 0))
        })
      } else {
        this.setState({
          currentPosition: Math.floor(status.positionMillis / 1000),
          currentPositionMillis: this.state.positionMillis,
          totalLength: Math.floor(this.props.tracks[this.state.selectedTrack].durationMillis / 1000),
        }, () => this.props.updateCurrentTrack(this.state.selectedTrack, Date.now(), status.positionMillis, this.state.paused))
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
    console.log(this.props.tracks)
    if (this.state.selectedTrack !== prevState.selectedTrack || this.props.tracks[this.state.selectedTrack].localUrl !== prevProps.tracks[this.state.selectedTrack].localUrl) {
      console.log('|--? selectedTrack change || loaclurl Loaded')
      loadTrack(this).then(() => {
        console.log('syncing to position....')
        this.state.player.setPositionAsync(Math.floor(this.props.ship.currentPositionMillis + (Date.now() - this.props.ship.timeStamp))).then(() => {
          setStatusUpdate(this).then(() => {
            setPlay(this)
          })
        })
      })
    }
    if (this.props.ship.currentPositionMillis !== 0 && this.state.loading === false && this.state.sync === false) {
      console.log('|--? initial sync && non-0 intial position')
        this.setState({sync: true}, () => this.state.player.setPositionAsync(Math.floor(this.props.ship.currentPositionMillis + (Date.now() - this.props.ship.timeStamp))).then(() => {
          setStatusUpdate(this).then(() => {
            setPlay(this)
          })
        })
        )
      }
  }

  render() {
    const track = this.props.tracks[this.state.selectedTrack];

    return (
      <View>
        <TrackDetails title={track.title} artist={track.artist} album={track.album}/>
        <SeekBar
          onSeek={this.seek = seek.bind(this)}
          trackLength={this.state.totalLength}
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