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
    console.log('totallength: ', props.tracks[account(this.props.ship, props.tracks).currentTrack].durationMillis)
    this.state = {
      paused: this.props.ship.paused,
      currentPosition: Math.floor(account(this.props.ship, this.props.tracks).currentPositionMillis / 1000) || 0,
      currentPositionMillis: Math.floor(account(this.props.ship, this.props.tracks).currentPositionMillis + ((Date.now() - account(this.props.ship, this.props.tracks).timeStamp))),
      selectedTrack: account(this.props.ship, this.props.tracks).currentTrack,
      totalLength: props.tracks[account(this.props.ship, props.tracks).currentTrack].durationMillis,
      player: new Expo.Audio.Sound(),
      tracks: props.tracks,
      loading: true,
      sync: false
    };
  }

   onPlaybackStatusUpdate = (status) => {
    var stamp = Date.now();
    // const date = Date.now();
    // const positionMillis = status.positionMillis;
      // console.log('---------------Status Update----------------')
     //   console.log('myPosition:', status.positionMillis)
      //   console.log('myDuration: ', status.durationMillis)
      // console.log(this.props.tracks.length, Number(this.state.selectedTrack) + 1, this.props.tracks, this.props.tracks[Number(this.state.selectedTrack + 1)])
      if (status.positionMillis === this.state.totalLength) {
          console.log('-----KING IFFY----')

          console.log(this.state.selectedTrack)

          console.log(this.state.tracks.length - 1)
          if (this.state.selectedTrack === this.state.tracks.length - 1) {
            rightTrack = 0
          } else {
            rightTrack - this.state.selectedTrack + 1
          }

          if (this.props.ship.currentTrack === 0) {
            rightTrack = 0
          }

          this.state.player.setPositionAsync(0).then( () => {
            this.state.player.stopAsync();
            console.log('setting pos async')
            this.setState({
            currentPosition: 0,
            currentPositionMillis: 0,
            paused: this.state.paused,
            totalLength: this.props.tracks[this.state.selectedTrack + 1].durationMillis,
            isChanging: false,
            player: new Expo.Audio.Sound(),
            selectedTrack: rightTrack,
            date: Date.now()
          }, () => {
            this.props.updateCurrentTrack(this.state.selectedTrack, stamp, status.positionMillis, this.state.paused, true)
            this.state.player.playAsync();
          });
        })
      } else {
        this.setState({
          currentPosition: Math.floor(status.positionMillis / 1000),
          currentPositionMillis: status.positionMillis,
          totalLength: this.props.tracks[this.state.selectedTrack].durationMillis,
          paused: this.state.paused,
          date: Date.now()
        }, () => {
          var date = Date.now();
          console.log('-----HERES YUR ENCHILADA: ', status.positionMillis, date, stamp)
          console.log(this.state.selectedTrack)
          this.props.updateCurrentTrack(this.state.selectedTrack, stamp, status.positionMillis, this.state.paused, (!this.state.sync))
        })
    }
  }

  componentDidMount() {
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('|---> componentDidUpdate')
    if (this.state.selectedTrack !== prevState.selectedTrack || this.props.tracks[this.state.selectedTrack].localUrl !== prevProps.tracks[this.state.selectedTrack].localUrl) {
      // console.log('|--? selectedTrack change || loaclurl Loaded')
      loadTrack(this).then(() => {
        console.log('syncing to position....')
        console.log(this.state.currentPositionMillis)
        this.state.player.setPositionAsync(Math.floor(this.state.currentPositionMillis)).then(() => {
          setStatusUpdate(this).then(() => {
            setPlay(this)
          })
        })
      })
    }
    if (this.props.ship.currentPositionMillis !== 0 && this.state.loading === false && this.state.sync === false) {
      console.log('|--? initial sync && non-0 intial position')
        this.setState({sync: true}, () => this.state.player.setPositionAsync(Math.floor(this.state.currentPositionMillis)).then(() => {
          setStatusUpdate(this).then(() => {
            setPlay(this)
          })
        })
        )
      }
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
            this.props.sendMessage('play');
            this.state.player.playAsync();
            }
          }
          onPressPause={() => {
            this.setState({paused: true})
            this.props.sendMessage('pause');
            this.state.player.pauseAsync();
            }
          }
          onBack={this.onBack = onBack.bind(this)}
          onForward={this.onForward = onForward.bind(this)}
          paused={this.state.paused}/>
      </View>
    );
  }
}