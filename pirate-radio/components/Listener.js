import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
} from 'react-native';
import TrackDetails from './TrackDetails';
import SeekBar from './SeekBar';
import Controls from './Controls';
import { loadTrack, setPlay, setStatusUpdate, account } from './functions';
import Styles from '../assets/styles/AppStyles';
export default class Listener extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paused: this.props.ship.paused,
      currentPosition: Math.floor(account(this.props.ship, this.props.tracks).currentPositionMillis / 1000) || 0,
      currentPositionMillis: Math.floor(account(this.props.ship, this.props.tracks).currentPositionMillis),
      selectedTrack: account(this.props.ship, this.props.tracks).currentTrack,
      totalLength: props.tracks[account(this.props.ship, props.tracks).currentTrack].durationMillis,
      player: new Expo.Audio.Sound(),
      tracks: props.tracks,
      loading: true,
      sync: false,
      over: false
    };
  }
   onPlaybackStatusUpdate = (status) => {
      var stamp = Date.now();

      if (this.state.selectedTrack === 0) {
        this.setState({over: false})
      }
      console.log('STATUS UPDATE', status.positionMillis)
      console.log('duration: ', status.durationMillis)
      console.log('IDEAL TIMESTART ', Math.floor(this.props.ship.currentPositionMillis + (Date.now() - this.props.ship.timeStamp)))
      if (status.positionMillis === this.state.totalLength) {
        if (this.state.selectedTrack === this.state.tracks.length - 1) {
            if (!this.state.over) {
              this.setState({over: true})
              this.state.player.stopAsync();

                this.state.player.setPositionAsync(0).then( () => {
                  console.log('setting pos async')
                  this.setState({
                  currentPosition: 0,
                  currentPositionMillis: 0,
                  paused: this.state.paused,
                  totalLength: this.props.tracks[0].durationMillis,
                  isChanging: false,
                  player: new Expo.Audio.Sound(),
                  selectedTrack: 0,
                  date: Date.now()
                }, () => {
                  this.props.updateCurrentTrack(this.state.selectedTrack, stamp, status.positionMillis, this.state.paused, true)
                  this.state.player.playAsync();
                });
              })
            }
          } else {
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
            }, () => {
              this.props.updateCurrentTrack(this.state.selectedTrack, Date.now(), status.positionMillis, this.state.paused, true)
              this.state.player.playAsync();
            });
          })
        }
    } else {
        this.setState({
          currentPosition: Math.floor(status.positionMillis / 1000),
          currentPositionMillis: status.positionMillis,
          totalLength: this.props.tracks[this.state.selectedTrack].durationMillis
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
        this.state.player.setPositionAsync(this.state.currentPositionMillis).then(() => {
          setStatusUpdate(this).then(() => {
            setPlay(this)
          })
        })
      })
    }
    if (this.props.ship.currentPositionMillis !== 0 && this.state.loading === false && this.state.sync === false) {
      console.log('TRYING TO SCRUB FROM POSITION')
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
    console.log('Selected track has a title of: ', track.title)

    if (this.props.paused && this.state.paused === false) {
      this.setState({paused: true});
      this.state.player.pauseAsync();
    } else if (!this.props.paused && this.state.paused) {
      this.setState({paused: false});
      this.state.player.playAsync();
    }
    return (
      <View>
        <TrackDetails title={track.title} artist={track.artist} album={track.album}/>
        <SeekBar
          trackLength={totalLength}
          currentPosition={this.state.currentPosition || 0} />
      </View>
    );
  }
}