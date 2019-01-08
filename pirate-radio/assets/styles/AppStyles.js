'use strict' 

import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { greyBg, buttonBlue, allHeaders, nowPlaying, normalFont, pirateFont, trackFont, allPlaylists, allSyncButtons } from './Constants';

import EStyleSheet from 'react-native-extended-stylesheet';

const { width, height } = Dimensions.get('window');

module.exports = EStyleSheet.create({
    Boxes: {
        height: height,
        width: width,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignSelf: 'center',
        marginTop: '10%'
    },

    SpaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    ListenHostIcons: {
        textAlign: 'center',
        fontSize: '4rem',
        color: 'white'
    },

    ShipHeader: {
        ...allHeaders,
        paddingLeft: '0.5rem',
        paddingRight: '2rem',
        justifyContent: 'space-between',
    },

    CaptainHeader: {
        ...allHeaders,
        paddingLeft: 10,
        justifyContent: 'space-between',
    },
    
    CaptainHeaderTickerContainer: {
        width: '73%',
    },

    CaptainHeaderText: {
        fontFamily: 'BlackPearl',
        color: 'white',
        fontSize: '1.55rem',
    },

    ListenHostButtons: {
        height: '35%',
        width: '95%',
        margin: 10,
        borderRadius: 30,
        opacity: 0.9,
        borderWidth: 1,
        justifyContent: 'center',
        backgroundColor: 'black'
    },
    
    Search: {
        flexDirection: 'column',
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        width: '95%',
        borderWidth: 0,
    },

    SearchContainer: {
        borderRadius: 15,
        backgroundColor: greyBg,
    },
    
    SearchInputText: {
        ...normalFont,
        fontSize: '1rem',
        color: 'white',
        backgroundColor: '#484848',
    },

    NewShip: {
        height: height * 0.38,
        width: '95%',
        marginTop: 2,
        paddingTop: '0.5rem',
        flexDirection: 'column',
        alignSelf: 'center',
        justifyContent: 'flex-start',
        backgroundColor: greyBg,
        borderRadius: 15,
    },

    NewShipHeader: {
        width: '100%',
        flex: 1.5,
    },

    ShipFormContainer: {
        flex: 8.5,
        width: '95%',
        backgroundColor: 'grey',
        alignSelf: 'center',
        justifyContent: 'center',
        marginBottom: 5,
        marginTop: 5,
        borderRadius: 7,
    },

    ShipFormInputs: {
        height: '1.5rem',
        width: '95%',
        fontFamily: 'Times New Roman',
        alignSelf: 'center',
        fontSize: '1rem',
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: 'white',
        opacity: 0.8,
        marginTop: '0.3rem',
        paddingLeft: 8,
    },

    ShipFormButton: {
        aspectRatio: 4/1,
        width: width * 0.32,
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: buttonBlue,
        marginTop: '0.3rem',
        marginRight: 10,
        paddingHorizontal: 5,
    },

    ShipFormLabelText: {
        fontSize: '1rem',
        fontWeight: 'bold',
        fontFamily: 'Times New Roman',
        marginTop: '0.3rem',
        marginLeft: 10,
    },

    ShipFormButtonText: {
        ...normalFont,
        fontSize: '1rem',
    },

    StandardText: {
        fontSize: '1rem',
    },

    YeOldShips: {
        height: height * 0.36,
        width: '95%',
        marginTop: 2,
        paddingTop: '0.5rem',
        flexDirection: 'column',
        alignSelf: 'center',
        justifyContent: 'flex-start',
        backgroundColor: greyBg,
        borderRadius: 15,
    },

    YeOldShipsContainer: {
        height: '70%',
        width: '100%',
    },

    YeOldShipsItems: {
        width: '100%',
        height: '15%',
        borderRadius: 10,
        marginTop: 8,
        backgroundColor: 'grey',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    Results: {
        alignSelf: 'center',
        justifyContent: 'flex-start',
        width: '95%',
        height: height * 0.36,
        marginTop: 2,
        paddingTop: '0.5rem',
        backgroundColor: greyBg,
        borderRadius: 15,
    },

    Popular: {
        alignSelf: 'center',
        justifyContent: 'flex-start',
        width: '95%',
        height: height * 0.385,
        marginTop: 2,
        paddingTop: '0.5rem',
        backgroundColor: greyBg,
        borderRadius: 15,
    },
    
    ResultsContainer: {
        alignSelf: 'center',
        flex: 1,
        width: '100%',
        marginVertical: 5,
        borderRadius: 15,
        backgroundColor: greyBg,
    },

    PopularContainer: {
        alignSelf: 'center',
        flex: 1,
        width: '100%',
        marginVertical: 5,
        borderRadius: 15,
        backgroundColor: greyBg,
    },

    PopularFirstLine: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    // SHIP PAGES BELOW!!!!
    
    NowPlayingCrew: {
        ...nowPlaying,
        height: height * 0.32,
    },

    NowPlayingCaptain: {
        ...nowPlaying,
        height: height * 0.39,
    },

    TrackDetailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '7rem',
        width: '100%',
        overflow: 'hidden',
    },
    
    TrackDetailsSongInfo: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 3,
        marginHorizontal: '0.5rem',
    },
    
    TrackDetailsShipIconContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 2,
        paddingTop: '1rem',
    },
    
    TrackDetailsPrimaryText: {
        ...trackFont,
        textAlign: 'center',
        fontSize: '1.4rem',
        fontWeight: 'bold',
    },

    TrackDetailsSecondaryText: {
        ...trackFont,
        textAlign: 'center',
        fontSize: '1.2rem',
        marginTop: '0.1rem',
    },

    SeekBarContainer: {
        height: '1.5rem',
        width: '100%',
        marginBottom: 5,
    },

    SeekBarSlider: {
        marginTop: -12,
    },

    SeekBarTrack: {
        height: '0.15rem',
        borderRadius: 1,
    },

    SeekBarThumb: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'white',
    },

    SeekBarText: {
        ...trackFont,
        opacity: 0.72,
        fontSize: '0.75rem',
        textAlign:'center',
        width: '2.5rem',
    },

    ControlsContainer: {
        height: '3rem',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5,
    },

    ControlPlayIcons: {
        height: '2.5rem',
        width: '2.5rem',
    },

    ControlSeekIcons: {
        height: '2rem',
        width: '2rem',
    },

    ControlsOff: {
        opacity: 0.30,
    },

    NowPlayingButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: '2.5rem',
    },

    DownloadButton: {
        backgroundColor: buttonBlue,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 1,
        width: '40%',
        height: '1.6rem',
        marginLeft: '0.5rem',
        borderRadius: 20,
    },

    SyncBlueButton: {
        ...allSyncButtons,
        backgroundColor: buttonBlue,
    },

    SyncRedButton: {
        ...allSyncButtons,
        backgroundColor: '#9b2933',
    },

    // !!!! END OF SHIP PAGES

    SearchList: {
        width: '95%',
        borderColor: 'black',
        borderWidth: 1,
        marginTop: '0.3rem',
        marginHorizontal: 8,
        backgroundColor: 'grey',
        paddingVertical: '2%',
        paddingHorizontal: '2%',
        borderRadius: 5,
    },

    ShipCaptainPlaylist: {
        ...allPlaylists,
        height: height * 0.34,
    },

    ShipCrewPlaylist: {
        ...allPlaylists,
        height: height * 0.40,
    },

    TrackListContainer: {
        flex: 4,
        alignSelf: 'center',
        width: '95%',
    },

    TrackList: {
        flex: 1,
        paddingHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    Off: {
        opacity: 0.6,
    },

    Active: {
        fontWeight: 'bold',
        backgroundColor: '#708090',
    },

    ActiveIcon: {
        color: 'white',
        fontSize: '1.25rem',
        position: 'relative',
        top: '0.275rem',
    },

    OffIcon: {
        opacity: 0,
    },

    ListenHostText: {
        fontFamily: 'BlackPearl',
        color: 'white',
        // fontSize: 60,
        fontSize: '4rem',
        textAlign: 'center',
    },

    BigTextPirate: {
        marginBottom: '-10%',
        fontFamily: 'BlackPearl',
        color: 'white',
        textAlign: 'center',
        fontSize: '1.55rem',
    },

    MediumTextPirate: {
        ...pirateFont,
        textAlign: 'center',
        fontSize: '1.25rem',
    },

    MediumTextNormal: {
        ...normalFont,
        textAlign: 'center',
        fontSize: '1.25rem',
    },
    
    SmallTextPirate: {
        ...pirateFont,
        fontSize: '1rem',
    },

    SmallTextNormal: {
        ...normalFont,
        fontSize: '1rem',
    },

    TinyTextPirate: {
        ...pirateFont,
        fontSize: '0.75rem',
    },

    TinyTextNormal: {
        ...normalFont,
        fontSize: '0.75rem',
    },
    
    MediumIcon: {
        width: '1.5rem',
        height: '1.5rem',
    },
    
    SmallIcon: {
        width: '1.0rem',
        height: '1.0rem',
    },
    
    TinyIcon: {
        color: 'white',
        fontSize: '0.85rem',
    },

    LogoutIcon: {
        marginTop: '0.25rem',
        marginRight: '1rem',
        fontSize: '1.55rem',
        color: 'white',
    },
    
    PirateShipIcon: {
        flex: 0.65,
        aspectRatio: 1/1,
        position: 'relative',
        bottom: '1rem',
    },

    TinyIcon: {
        width: '0.8rem',
        height: '0.8rem',
    },

    container: {
        flex: 1,
        backgroundColor: 'rgb(4,4,4)',
    },

    audioElement: {
        height: 0,
        width: 0,
    },

    SignInContainer: {
        width: '92%',
        height: '82%',
        position: 'relative',
        top: '5%',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.84)',
    },

    SignInInput: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
        backgroundColor: 'white',
    },

    SignInLogin: {
        width: 105,
        height: 30,
        padding: 5,
        borderWidth: 1,
        borderRadius: 60,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'mediumslateblue',
    },
      
    SignInLoginText: {
        fontSize: 15,
    },

    // Footer begins here!!!!

    Footer: {
        height: height * 0.14,
        position: 'absolute',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        top: '90%',
        width: '100%'
    },

    BottomNavElements: {
        height: '100%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    BottomNavButtonContainerIOS: {
        justifyContent: 'center',
        width: '46%',
        height: '50%',
        borderRadius: 40,
        backgroundColor: greyBg,
    },
    BottomNavButtonContainerAndroid: {
        justifyContent: 'center',
        width: '46%',
        height: '20%',
        borderRadius: 40,
        backgroundColor: greyBg,
    },
    BottomNavBackContainer: {
        marginLeft: 8,
        paddingLeft: 12,
    },

    BottomNavVolumeContainer: {
        marginRight: 8,
        paddingRight: 12,
    },
    
    BottomNavBackIcon: {
        textAlign: 'left',
        color: 'white',
        fontSize: '1.15rem',
    },

    BottomNavVolumeIcon: {
        textAlign: 'right',
        color: 'white',
        fontSize: '1.15rem',
    },

    // !!!! Footer ends here
})