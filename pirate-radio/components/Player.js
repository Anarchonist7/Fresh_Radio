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
import { loadTrack, seek, onBack, onForward, setPlay, setStatusUpdate, account } from './functions';
import Styles from '../assets/styles/AppStyles';

import { FontAwesome } from '@expo/vector-icons';

export default class Player extends Component {
  constructor(props) {
    super(props);
    console.log('totallength: ', props.tracks[account(this.props.ship, props.tracks).currentTrack].durationMillis)
    this.state = {
      paused: true,
      currentPosition: Math.floor(account(this.props.ship, this.props.tracks).currentPositionMillis / 1000) || 0,
      currentPositionMillis: Math.floor(account(this.props.ship, this.props.tracks).currentPositionMillis + ((Date.now() - account(this.props.ship, this.props.tracks).timeStamp))),
      selectedTrack: account(this.props.ship, this.props.tracks).currentTrack,
      totalLength: props.tracks[account(this.props.ship, props.tracks).currentTrack].durationMillis,
      player: new Expo.Audio.Sound(),
      tracks: props.tracks,
      loading: true,
      sync: false,
      over: false
    };
  }
  // restartPlaylist() {
  //   console.log('restart ------!------ playlist')
  //     this.state.player.setPositionAsync(0).then( () => {
  //       console.log('setting pos async')
  //       this.setState({
  //       currentPosition: 0,
  //       currentPositionMillis: 0,
  //       paused: this.state.paused,
  //       totalLength: this.props.tracks[0].durationMillis,
  //       isChanging: false,
  //       player: new Expo.Audio.Sound(),
  //       selectedTrack: 0,
  //       date: Date.now()
  //     }, () => {
  //       this.props.updateCurrentTrack(this.state.selectedTrack, stamp, status.positionMillis, this.state.paused, true)
  //       this.state.player.playAsync();
  //     });
  //   })
  // }

  // onPlaylistEnd() {
  //   if (!this.state.over) {
  //     this.setState({over: true})
  //     console.log(this.state.selectedTrack)
  //     console.log("------over dover")
  //     setTimeout(this.restartPlaylist, 4000);
  //   }
  // }

   onPlaybackStatusUpdate = (status) => {
    console.log('statup')
    var stamp = Date.now();

    if (this.state.selectedTrack === 0) {
      this.setState({over: false})
    }

    // const date = Date.now();
    // const positionMillis = status.positionMillis;
      // console.log('---------------Status Update----------------')
     //   console.log('myPosition:', status.positionMillis)
      //   console.log('myDuration: ', status.durationMillis)
      // console.log(this.props.tracks.length, Number(this.state.selectedTrack) + 1, this.props.tracks, this.props.tracks[Number(this.state.selectedTrack + 1)])

      ///---------------------below is what's important
      if (status.positionMillis === this.state.totalLength) {
        this.state.player.pauseAsync();
          this.setState({
            totalLength: this.state.totalLength + 2
          }, () => {
            this.props.sendMessage(this.state.selectedTrack + 1, Date.now())
          })
          //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^for captain

          // console.log(this.state.selectedTrack, this.state.tracks.length - 1)
        //   if (this.state.selectedTrack === this.state.tracks.length - 1) {
        //     if (!this.state.over) {
        //       this.setState({over: true})
        //       this.state.player.stopAsync();

        //         this.state.player.setPositionAsync(0).then( () => {
        //           console.log('setting pos async')
        //           this.setState({
        //           currentPosition: 0,
        //           currentPositionMillis: 0,
        //           paused: this.state.paused,
        //           totalLength: this.props.tracks[0].durationMillis,
        //           isChanging: false,
        //           player: new Expo.Audio.Sound(),
        //           selectedTrack: 0,
        //           date: Date.now()
        //         }, () => {
        //           // this.props.updateCurrentTrack(this.state.selectedTrack, stamp, status.positionMillis, this.state.paused, true)
        //           // this.state.player.playAsync();
        //         });
        //       })
        //     }
        //   } else {
        //     this.state.player.setPositionAsync(0).then( () => {
        //       this.state.player.stopAsync();
        //       console.log('setting pos async')
        //       this.setState({
        //       currentPosition: 0,
        //       currentPositionMillis: 0,
        //       paused: this.state.paused,
        //       totalLength: this.props.tracks[this.state.selectedTrack + 1].durationMillis,
        //       isChanging: false,
        //       player: new Expo.Audio.Sound(),
        //       selectedTrack: this.state.selectedTrack === this.state.tracks.length - 1 ? this.state.selectedTrack - (this.state.selectedTrack.length -1) : this.state.selectedTrack + 1,
        //       date: Date.now()
        //     }, () => {
        //       // this.props.updateCurrentTrack(this.state.selectedTrack, stamp, status.positionMillis, this.state.paused, true)
        //       // this.state.player.playAsync();
        //     });
        //   })
        // }
      } else {
        this.setState({
          currentPosition: Math.floor(status.positionMillis / 1000),
          currentPositionMillis: status.positionMillis,
          totalLength: this.props.tracks[this.state.selectedTrack].durationMillis,
          paused: this.state.paused,
          date: Date.now()
        }, () => {
          var date = Date.now();
          // console.log('-----HERES YUR ENCHILADA: ', status.positionMillis, date, stamp)
          console.log(this.state.selectedTrack)
          this.props.updateCurrentTrack(this.state.selectedTrack, stamp, status.positionMillis, this.state.paused, (!this.state.sync))
        })
    }
  }

  componentDidMount() {
    this.props.sendMessage('ahoy!', Date.now());
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('-----component did update mahfka!!!')
    // if (this.props.paused) {
    //   console.log('we paused yo')
    // } else if (!this.props.paused){
    //   console.log('we totally aint paused yo');
    // }
    // console.log('|---> componentDidUpdate')
    if (this.state.selectedTrack !== prevState.selectedTrack || this.props.tracks[this.state.selectedTrack].localUrl !== prevProps.tracks[this.state.selectedTrack].localUrl) {
      // console.log('|--? selectedTrack change || loaclurl Loaded')
      loadTrack(this).then(() => {
        // console.log('syncing to position....')
        // console.log(this.state.currentPositionMillis)
        this.state.player.setPositionAsync(Math.floor(this.state.currentPositionMillis)).then(() => {
          setStatusUpdate(this).then(() => {
            // setPlay(this)
          })
        })
      })
    }
    if (this.props.ship.currentPositionMillis !== 0 && this.state.loading === false && this.state.sync === false) {
      // console.log('|--? initial sync && non-0 intial position')
      this.setState({sync: true}, () => this.state.player.setPositionAsync(Math.floor(this.state.currentPositionMillis)).then(() => {
        setStatusUpdate(this).then(() => {
          // setPlay(this)
        })
      }))
    }

    if (this.props.isMuted !== prevProps.isMuted) {
      if (prevProps.isMuted){
        // console.log("PLAYER.js", this.props.isMuted);
        this.state.player.setIsMutedAsync(0.0)
      } else {
        // console.log("PLAYER.js", this.props.isMuted);
        this.state.player.setIsMutedAsync(1.0)
      }

      // this.state.player.soundObject.setIsMutedAsync(!prevProps.isMuted)
    }
  }

  move() {
    console.log('|---> onBack triggered')
    this.state.player.stopAsync();
    this.setState({
      currentPosition: 0,
      paused: this.state.paused,
      totalLength: 2,
      isChanging: false,
      player: new Expo.Audio.Sound(),
      selectedTrack: this.props.ship.currentTrack
    }, () => {
      this.props.sendMessage('pause', Date.now(), 0);
      this.props.updateCurrentTrack(this.state.selectedTrack, 0, 0)
      setTimeout(() => {this.props.sendMessage('play', Date.now())}, 4500);
    });
  }

  componentWillUnmount() {
    this.state.player.unloadAsync();
    this.props.sendMessage('avast!', Date.now());
  }

  render() {
    const track = this.props.tracks[this.state.selectedTrack];
    const totalLength = Math.floor(this.state.totalLength / 1000);
    if (this.state.selectedTrack !== this.props.ship.currentTrack) {
      this.move();
    }
    if (this.props.paused && this.state.paused === false) {
      this.setState({paused: true});
      console.log('latency from server: ', Date.now() - this.props.ST)
      setTimeout(() => {
        this.state.player.pauseAsync().then( () => {
        this.state.player.setPositionAsync(this.props.MS);
      })}, 3000 - (Date.now() - this.props.ST))
    } else if (this.props.paused === false && this.state.paused) {
      this.setState({paused: false});
      console.log('latency from server: ', Date.now() - this.props.ST)
      setTimeout(() => {
          this.state.player.playAsync().then( () => {
            this.state.player.setIsMutedAsync(0.0);
            this.props.syncFalse();
            this.props.resetReq();
          })
      }, 3000 - (Date.now() - this.props.ST))
    }
    return (
      <View>
        <TrackDetails title={track.title} artist={track.artist} album={track.album} paused={this.state.paused}/>
        <SeekBar
          onSeek={this.seek = seek.bind(this)}
          trackLength={totalLength}
          currentPosition={this.state.currentPosition || 0} />
        <Controls
          forwardDisabled={this.state.selectedTrack === this.props.tracks.length - 1}
          backDisabled={this.state.selectedTrack === 0}
          playDisabled={(track.localUrl !== null) === false}
          onPressPlay={() => {

            this.props.sendMessage('play', Date.now());

            }
          }
          onPressPause={() => {

            this.props.sendMessage('pause', Date.now(), this.state.currentPositionMillis);
            this.state.player.setIsMutedAsync(1.0);
            }
          }
          onBack={() => {
              this.props.sendMessage(this.state.selectedTrack - 1, Date.now());
            }
          }
          onForward={() => {
              this.props.sendMessage(this.state.selectedTrack + 1, Date.now());
            }
          }
          paused={this.state.paused}/>
      </View>
    );
  }
}