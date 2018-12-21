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
      tracks: props.tracks
    };



  }

  handlePlay1 = async () => {

        try {
          console.log('TRYING TO LOAD: ', this.state.selectedTrack);
          await this.state.player.loadAsync({uri: this.props.tracks[this.state.selectedTrack].localFile});
          console.log('loaded');
        { shouldPlay: true }
          this.audioPlayer1 = this.state.player;

        } catch (error) {
        console.log('an error has occured: ', error);

        }
    }




  setDuration(data) {
    // console.log(totalLength);
    this.setState({totalLength: Math.floor(data.duration)});
  }

  setTime(data) {
    //console.log(data);
    this.setState({currentPosition: Math.floor(data.currentTime)});
  }

  seek(time) {
    time = Math.round(time);
    this.refs.audioElement && this.refs.audioElement.seek(time);
    this.setState({
      currentPosition: time,
      paused: false,
    });
  }

  onBack() {
    if (this.state.currentPosition < 10 && this.state.selectedTrack > 0) {
      this.refs.audioElement && this.refs.audioElement.seek(0);
      this.setState({ isChanging: true });
      setTimeout(() => this.setState({
        currentPosition: 0,
        paused: false,
        totalLength: 1,
        player: new Expo.Audio.Sound(),
        isChanging: false,
        selectedTrack: this.state.selectedTrack - 1,
      }), 0);
    } else {
      this.refs.audioElement.seek(0);
      this.setState({
        currentPosition: 0,
      });
    }
  }

  onForward() {
    if (this.state.selectedTrack < this.props.tracks.length - 1) {
      // this.refs.audioElement && this.refs.audioElement.seek(0);
      // this.setState({ isChanging: true });

      this.setState({
        currentPosition: 0,
        totalLength: 1,
        paused: false,
        isChanging: false,
        player: new Expo.Audio.Sound(),
        selectedTrack: this.state.selectedTrack + 1,
        tracks: this.props.tracks
      });
    }

    console.log('On forward triggered: ', this.state.selectedTrack)
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




this.handlePlay1();







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

  render() {
    // if(this.props.tracks.length === 0) {
    //   return <View><Text>Loading</Text></View>
    // }

    const track = this.props.tracks[this.state.selectedTrack];
    console.log('Im in the render method ', this.state.selectedTrack);


    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Header message="Playing From Charts" />
        <AlbumArt url={track.albumArtUrl} />
        <TrackDetails title={track.title} artist={track.artist} />
        <SeekBar
          onSeek={this.seek.bind(this)}
          trackLength={this.state.totalLength}
          onSlidingStart={() => this.setState({paused: true})}
          currentPosition={this.state.currentPosition} />
        <Controls
          forwardDisabled={this.state.selectedTrack === this.props.tracks.length - 1}
          playDisabled={this.props.tracks.some(value => value.localFile !== null) === false}
          onPressPlay={() => {

             this.setState({paused: false});
              this.state.player.setPositionAsync(0);
              this.state.player.setRateAsync(1, false);
              this.handlePlay1();
              this.state.player.playAsync();
            // console.log(this.props.socket);
            //this.props.socket.send("PLAY");
          }}
          onPressPause={() => {
              this.setState({paused: true})
              this.handlePlay1();
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