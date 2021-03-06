import React, { Component } from 'react';

export const loadTrack = async (context) => {
    console.log('|---> loadTrack triggered')
    const track = context.props.tracks[context.state.selectedTrack];
    const player = context.state.player
    if (!track.localUrl) {
      console.log('no localUrl to load yet')
    }
      try {
        // context.state.player.unloadAsync()
        if (track.localUrl) {
          console.log('trying to load track id: ', track.id);
          await player.loadAsync({uri: track.localUrl});
          console.log('!!!loaded track id: ', track.id);
          context.setState({loading: false})
        }
      } catch (error) {
      console.log('LOAD ERROR: ', error);
      }
    }

export function seek(time) {
    console.log('|---> seekTime triggered: ', time)
    this.state.player.setIsMutedAsync(1.0)
    time = Math.round(time);
    this.refs.audioElement && this.refs.audioElement.seek(time);
    this.state.player.setPositionAsync(time * 1000);
    this.setState({
      currentPosition: time,
      paused: false
    }, () => {
      this.props.sendMessage('pause', Date.now(), time * 1000);
      setTimeout(() => {this.props.sendMessage('play', Date.now());}, 4000)
    })
  }

export function onBack() {
    console.log('|---> onBack triggered')
    if (this.state.currentPosition < 1000 && this.state.selectedTrack > 0) {
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

  export function onForward() {
    console.log('|---> onForward triggered')
    if (this.state.selectedTrack < this.props.tracks.length - 1) {
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

  export const setPlay = async (context) => {
    console.log('|---> setPlay triggered')
    if(!context.state.paused){
      context.state.player.playAsync()
    }
  }

  export const setStatusUpdate = async (context) => {
    console.log('|---> setStatus triggered')
    context.state.player.setStatusAsync({progressUpdateIntervalMillis: 1000})
    context.state.player.setOnPlaybackStatusUpdate(context.onPlaybackStatusUpdate)
  }

  function calcTotal(tracks) {
   let total = 0
   tracks.forEach(function(track) {
     total += track.durationMillis
   });
   return total;
 }

 export function account(shipInfo, tracks) {
console.log('------!------were in account!!!!')

  console.log(shipInfo.paused)

   const {timeStamp, currentTrack, currentPositionMillis} = shipInfo;
   const total = calcTotal(tracks)
   const shipPosition = {
     currentTrack: currentTrack,
     currentPositionMillis: Math.floor(currentPositionMillis + (Date.now() - timeStamp)),
     timeStamp: Date.now()
   }

   if (shipInfo.paused) {
     shipPosition.currentPositionMillis = currentPositionMillis
   }

   console.log('total: ', total, 'ship.currentPositionMillis: ', shipPosition.currentPositionMillis, 'trackduration: ', tracks[shipPosition.currentTrack].durationMillis)
   while (shipPosition.currentPositionMillis > total) {
      shipPosition.currentTrack = 0;
      shipPosition.currentPositionMillis -= total;
   }
   // console.log(shipInfo);
   while(shipPosition.currentPositionMillis > tracks[shipPosition.currentTrack].durationMillis) {
    // console.log('------here be the tracks: ', tracks)
    shipPosition.currentPositionMillis -= tracks[shipPosition.currentTrack].durationMillis;
    console.log('track before update: ', shipPosition.currentTrack)
    console.log(shipPosition.currentPositionMillis, '<---1--->, ', tracks[shipPosition.currentTrack].durationMillis)
    if (shipPosition.currentTrack === tracks.length - 1) {
      console.log('if statement tripped')
      shipPosition.currentTrack = 0;
    } else {
      shipPosition.currentTrack++;
    }
        console.log(shipPosition.currentPositionMillis, '<---2--->, ', tracks[shipPosition.currentTrack].durationMillis)

    console.log('track aftore update: ', shipPosition.currentTrack)
   }
  //  console.log('Hey buddy here is the shipposition!: ', shipPosition)
   return shipPosition;
 }

