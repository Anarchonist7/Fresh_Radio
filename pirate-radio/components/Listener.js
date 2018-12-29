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
import { loadTrack, setPlay, setStatusUpdate } from './functions';
import Styles from '../assets/styles/AppStyles';
export default class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paused: this.props.ship.paused,
      totalLength: 1,
      currentPosition: Math.floor(this.props.ship.currentPositionMillis),
      currentPositionMillis: Math.floor(this.props.ship.currentPositionMillis + (Date.now() - this.props.ship.timeStamp)),
      selectedTrack: this.props.ship.currentTrack,
      totalLength: Math.floor(this.props.tracks[this.props.ship.currentTrack].durationMillis / 1000),
      player: new Expo.Audio.Sound(),
      tracks: props.tracks,
      loading: true,
      sync: false
    };
  }
   onPlaybackStatusUpdate = (status) => {
      console.log('STATUS UPDATE', status.positionMillis)
      console.log('duration: ', status.durationMillis)
      console.log('IDEAL TIMESTART ', Math.floor(this.props.ship.currentPositionMillis + (Date.now() - this.props.ship.timeStamp)))
      if (status.positionMillis === this.state.totalLength) {
        console.log('THIS CONDITION HAS BEEN MET')
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
        }, () => this.props.updateCurrentTrack(this.state.selectedTrack, Date.now(), status.positionMillis, this.state.paused, true))
      })
    } else {
        this.setState({
          currentPosition: Math.floor(status.positionMillis / 1000),
          currentPositionMillis: this.state.positionMillis,
          totalLength: Math.floor(this.props.tracks[this.state.selectedTrack].durationMillis / 1000)
        }, () => this.props.updateCurrentTrack(this.state.selectedTrack, Date.now(), status.positionMillis, this.state.paused, true))
      }
    }

  componentDidMount() {
    console.log('COMPONENT DID MOUNT MF')
    console.log(this.state.positionMillis)
    loadTrack(this)
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('Player componentDidUpdate')
    if (this.state.selectedTrack !== prevState.selectedTrack || this.props.tracks[this.state.selectedTrack].localUrl !== prevProps.tracks[this.state.selectedTrack].localUrl) {
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
      console.log('TRYING TO SCRUB FROM POSITION')
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
    console.log('Selected track has a title of: ', track.title)
    return (
      <View>
        <TrackDetails title={track.title} artist={track.artist} album={track.album}/>
        <SeekBar
          trackLength={this.state.totalLength}
          onSlidingStart={() => this.setState({paused: true})}
          currentPosition={this.state.currentPosition || 0} />
      </View>
    );
  }
}