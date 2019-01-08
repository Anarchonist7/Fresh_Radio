import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
const { width, height } = Dimensions.get('window');

export const greyBg = '#383131';
export const buttonBlue = '#424faf';

export const allHeaders = {
    height: height * 0.1,
    width: '95%',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: greyBg,
    borderRadius: 15,
}

export const nowPlaying = {
    alignSelf: 'center',
    justifyContent: 'flex-start',
    width: width * 0.95,
    marginTop: '0.15rem',
    paddingTop: '1rem',
    paddingHorizontal: '0.6rem',
    backgroundColor: greyBg,
    borderRadius: 15,
}

export const allPlaylists = {
    alignSelf: 'center',
    justifyContent: 'flex-start',
    width: '95%',
    marginTop: '0.3rem',
    paddingTop: '0.5rem',
    backgroundColor: greyBg,
    borderRadius: 15,
}

export const allSyncButtons = {
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%',
    height: '1.6rem',
    marginRight: '0.5rem',
    borderRadius: 20,
}

export const normalFont = {
    fontFamily: 'Times New Roman',
    color: 'white',
}
export const pirateFont = {
    fontFamily: 'BlackPearl',
    color: 'white',
}

export const trackFont = {
    fontFamily: 'Helvetica',
    color: 'white',
}