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

import Styles from '../assets/styles/AppStyles';


export default class Player extends Component {

  constructor(props) {
    super(props);

    this.state = {
      paused: this.props.ship.paused,
      totalLength: 1,
      currentPosition: Math.floor(this.props.ship.currentPositionMillis / 1000),
      currentPositionMillis: this.props.ship.currentPositionMillis,
      selectedTrack: 0,
      player: new Expo.Audio.Sound(),
      tracks: props.tracks,
      loading: true,
      sync: false
    };
  }

   onPlaybackStatusUpdate = (status) => {
      console.log('STATUS UPDATE', status.positionMillis)
      console.log('duration: ', status.durationMillis)
      if (status.positionMillis === status.durationMillis) {
        console.log('THIS CONDITION HAS BEEN MET')
        this.state.player.setPositionAsync(0).then( () => {
          this.state.player.stopAsync()
          this.setState({
          currentPosition: 0,
          currentPositionMillis: 0,
          paused: this.state.paused,
          totalLength: 1,
          isChanging: false,
          player: new Expo.Audio.Sound(),
          selectedTrack: this.state.selectedTrack + 1,
        }, () => this.props.updateCurrentTrack(this.state.selectedTrack, 0))
      })

      } else {
        this.setState({
          currentPosition: Math.floor(this.props.ship.currentPositionMillis / 1000),
          currentPositionMillis: this.props.ship.currentPositionMillis,
          totalLength: Math.floor(status.durationMillis / 1000),
        }, () => this.props.updateCurrentTrack(this.state.selectedTrack, Date.now(), status.positionMillis, this.state.paused))
      }



      // this.setState({
      //   currentPosition: status.positionMillis
      // })
      // this.state.currentPosition = status.positionMillis

    }

  loadTrackPlay = async () => {
    this.loadTrack().then(() => {
      this.state.player.setStatusAsync({progressUpdateIntervalMillis: 1000})
      this.state.player.setOnPlaybackStatusUpdate(this.onPlaybackStatusUpdate)
      if(!this.state.paused){
        this.state.player.playAsync()
      }
    })
  }

  loadTrack = async () => {
    console.log('LOAD TRACK TRIGGERED')
    const track = this.props.tracks[this.state.selectedTrack];
    const player = this.state.player
    if (!track.localUrl) {
      console.log('no localUrl to load yet')
    }
      try {
        // this.state.player.unloadAsync()
        if (track.localUrl) {
          console.log('TRYING TO LOAD TRACK ID: ', track.id);
          await player.loadAsync({uri: track.localUrl});
          console.log('LOADED TRACK ID: ', track.id);
          this.setState({loading: false})
        { shouldPlay: true }
        }
      } catch (error) {
      console.log('LOAD ERROR: ', error);
      }
    }

  setDuration(data) {
    // console.log(totalLength);
    this.setState({totalLength: Math.floor(data.duration)});
  }

  setTime(data) {
    //console.log(data);
    console.log('YARRR WE BE IN THE SET TIME FUNCTION')
    this.setState({currentPosition: Math.floor(data.currentTime)});
  }

  seek(time) {
    time = Math.round(time);
    this.refs.audioElement && this.refs.audioElement.seek(time);
    this.state.player.setPositionAsync(Math.floor(time * 1000));
    this.setState({
      currentPosition: time,
      paused: false,
    }), () => this.state.player.playAsync();
  }

  onBack() {
    if (this.state.currentPosition < 1000 && this.state.selectedTrack > 0) {

      // this.refs.audioElement && this.refs.audioElement.seek(0);
      // this.setState({ isChanging: true });
      this.state.player.stopAsync()
      this.setState({
        currentPosition: 0,
        paused: this.state.paused,
        totalLength: 1,
        isChanging: false,
        player: new Expo.Audio.Sound(),
        selectedTrack: this.state.selectedTrack - 1,
      }, () => this.props.updateCurrentTrack(this.state.selectedTrack, 0))
    } else {
      this.state.player.setPositionAsync(0).then(() => {
        if(!this.state.paused){
          this.state.player.playAsync()
        }
      });
      this.setState({
        currentPosition: 0,
      });
    }
  }

  onForward() {
    if (this.state.selectedTrack < this.props.tracks.length - 1) {
      // this.refs.audioElement && this.refs.audioElement.seek(0);
      // this.setState({ isChanging: true });
      this.state.player.stopAsync()

      this.setState({
        currentPosition: 0,
        paused: this.state.paused,
        totalLength: 1,
        isChanging: false,
        player: new Expo.Audio.Sound(),
        selectedTrack: this.state.selectedTrack + 1,
      }, () => this.props.updateCurrentTrack(this.state.selectedTrack, 0))
    }
  }

  componentDidMount() {

    // const dlTracks = this.state.tracks.map(file =>
    // FileSystem.downloadAsync(file.audioUrl, FileSystem.documentDirectory + file.name)
    // )
    // try {
    //   await Promise.all(dlTracks);
    // } catch (error) {
    //   console.error(error)
    // }
    console.log('COMPONENT DID MOUNT MF')
    console.log(this.state.positionMillis)
    this.loadTrack()



  //   this.props.socket.on('message', data => {
  //     console.log(data);
  //     if (data === "PLAY"){
  //       console.log("data equals play");
  //       this.setState({ paused: false });
  //     } else {
  //       console.log("data does not equal play");
  //       throw new Error(`Undefined data type: ${data.type}`);
  //     }
  //   })
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Player componentDidUpdate')
    if (this.state.selectedTrack !== prevState.selectedTrack || this.props.tracks[this.state.selectedTrack].localUrl !== prevProps.tracks[this.state.selectedTrack].localUrl) {
      this.loadTrackPlay().then(() => {
        console.log('SHIP POSITION', this.props.ship.currentPositionMillis)
        this.state.player.setPositionAsync(this.props.ship.currentPositionMillis)
      })
    }



    if (this.props.ship.currentPositionMillis !== 0 && this.state.loading === false && this.state.sync === false) {

      console.log('TRYING TO SCRUB FROM POSITION')
        this.setState({sync: true}, () => this.state.player.setPositionAsync(this.props.ship.currentPositionMillis).then(() => {
          if (this.props.ship.paused === false) {
            console.log('TRYING TO PLAY FROM POSITION')
            this.state.player.playAsync()
          }
        })
        )
      }

  }

  render() {
    // if(this.props.tracks.length === 0) {
    //   return <View><Text>Loading</Text></View>
    // }
    const track = this.props.tracks[this.state.selectedTrack];

    console.log('Selected track has a title of: ', track.title)

    return (
      <View>
        <TrackDetails title={track.title} artist={track.artist} album={track.album}/>
        <SeekBar
          onSeek={this.seek.bind(this)}
          trackLength={this.state.totalLength}
          onSlidingStart={() => this.setState({paused: true})}
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
          onBack={this.onBack.bind(this)}
          onForward={this.onForward.bind(this)}
          paused={this.state.paused}/>
      </View>
    );
  }
}
