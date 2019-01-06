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
    paddingTop: '2rem',
    paddingHorizontal: '0.6rem',
    backgroundColor: greyBg,
    borderRadius: 15,
}
export const normalFont = {
    fontFamily: 'Times New Roman',
    color: 'white',
}
export const pirateFont = {
    fontFamily: 'BlackPearl',
    color: 'white',
}