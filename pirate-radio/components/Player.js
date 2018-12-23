import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar,
} from 'react-native';
import Header from './Header';
import AlbumArt from './AlbumArt';
import TrackDetails from './TrackDetails';
import SeekBar from './SeekBar';
import Controls from './Controls';


export default class Player extends Component {

  constructor(props) {
    super(props);

    this.state = {
      paused: true,
      totalLength: 1,
      currentPosition: 0,
      selectedTrack: 0,
      player: new Expo.Audio.Sound(),
      tracks: props.tracks,
      loading: true,
    };
  }

   onPlaybackStatusUpdate = (status) => {
      console.log('STATUS UPDATE', status.positionMillis)

      console.log(status.durationMillis)
      this.setState({
        currentPosition: Math.floor(status.positionMillis / 1000),
        totalLength: Math.floor(status.durationMillis / 1000)
      })

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
    console.log('IM SEEKIN BRUH: ', time * 1000);
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
    this.props.updateCurrentTrack(this.state.selectedTrack, 0)
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
      })
    }
  }

  render() {
    // if(this.props.tracks.length === 0) {
    //   return <View><Text>Loading</Text></View>
    // }
    const track = this.props.tracks[this.state.selectedTrack];

    // console.log('Selected track has a localUrl of: ', track.localUrl)

    return (
      // <View style={styles.container}>
      <View>
        {/* <StatusBar hidden={true} />
        <Header message="Playing From Charts" /> */}
        {/* <AlbumArt url={track.albumArtUrl} /> */}
        <TrackDetails title={track.title} artist={track.artist} album={track.album}/>
        <SeekBar
          onSeek={this.seek.bind(this)}
          trackLength={this.state.totalLength}
          onSlidingStart={() => this.setState({paused: true})}
          currentPosition={this.state.currentPosition} />
        <Controls
          forwardDisabled={this.state.selectedTrack === this.props.tracks.length - 1}
          backDisabled={this.state.selectedTrack === 0}
          playDisabled={(track.localUrl !== null) === false}
          onPressPlay={() => {
            this.setState({paused: false})
            this.state.player.playAsync();
            // console.log(this.props.socket);
            //this.props.socket.send("PLAY");
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

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'rgb(4,4,4)',
  },
  audioElement: {
    height: 0,
    width: 0,
  }
};