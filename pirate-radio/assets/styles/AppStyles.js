'use strict' 

import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { greyBg, buttonBlue, allHeaders, nowPlaying, normalFont, pirateFont } from './Constants';

import EStyleSheet from 'react-native-extended-stylesheet';

const { width, height } = Dimensions.get('window');

module.exports = EStyleSheet.create({
    SpaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    NewShipHeader: {
        width: '100%',
        flex: 0.2,
    },

    ShipHeader: {
        ...allHeaders,
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

    Boxes: {
        height: '100%',
        width: '100%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignSelf: 'center',
        marginTop: '10%'
    },

    Search: {
        paddingHorizontal: 10,
        flexDirection: 'column',
        alignSelf: 'center',
        justifyContent: 'center',
        width: '95%',
        height: '10%',
        backgroundColor: greyBg,
        borderRadius: 15,
    },

    NewShip: {
        // height: 275,
        // height: '16rem',
        height: height * 0.4,
        width: '95%',
        marginTop: '0.15rem',
        paddingTop: '0.5rem',
        flexDirection: 'column',
        alignSelf: 'center',
        justifyContent: 'flex-start',
        backgroundColor: greyBg,
        borderRadius: 15,
    },

    ShipFormContainer: {
        flex: 0.8,
        width: '95%',
        backgroundColor: 'grey',
        alignSelf: 'center',
        marginBottom: '0.2rem',
        borderRadius: 7,
    },

    ShipFormInputs: {
        height: '1.5rem',
        width: '95%',
        fontFamily: 'Times New Roman',
        alignSelf: 'center',
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
        fontSize: width * 0.05,
        fontWeight: 'bold',
        fontFamily: 'Times New Roman',
        marginTop: '0.3rem',
        marginLeft: 10,
    },

    ShipFormButtonText: {
        fontFamily: 'Times New Roman',
        fontSize: '1rem',
    },

    ShipFormButtonIcon: {
        fontSize: '1rem',
    },

    YeOldShips: {
        height: height * 0.30,
        width: '95%',
        marginTop: '0.15rem',
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
        height: '44%',
        marginTop: '0.15rem',
        paddingTop: '0.5rem',
        backgroundColor: greyBg,
        borderRadius: 15,
    },

    ResultsContainer: {
        alignSelf: 'center',
        width: '95%',
        height: '80%',
        marginTop: '0.15rem',
        marginBottom: '2%',
        paddingTop: '0.5rem',
        borderRadius: 10,
        backgroundColor: 'grey',
    },

    PopularContainer: {
        alignSelf: 'center',
        width: '95%',
        height: '80%',
        marginTop: '0.15rem',
        marginBottom: '0.15rem',
        borderRadius: 10,
        backgroundColor: 'grey',
    },

    Popular: {
        alignSelf: 'center',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '95%',
        height: '35%',
        paddingTop: '0.5rem',
        marginTop: '0.15rem',
        backgroundColor: greyBg,
        borderRadius: 15,
    },

    PopularFirstLine: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    // SHIP PAGES BELOW!!!!
    
    NowPlayingCrew: {
        ...nowPlaying,
        // height: 220,
        height: height * 0.4,
    },

    NowPlayingCaptain: {
        ...nowPlaying,
        // height: 280,
        height: height * 0.32,
    },

    TrackDetailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: '2rem',
        paddingRight: '1rem',
        width: '100%',
    },

    TrackDetailsSongInfo: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '2.8rem',
        width: '50%',
    },
    
    TrackDetailsTickerText: {
        fontSize: '1.33rem',
        textAlign: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'white',
    },

    TrackDetailsArtistText: {
        color: 'rgba(255, 255, 255, 0.72)',
        // width: 200,
        textAlign: 'center',
        fontSize: '1rem',
        marginTop: 4,
    },

    TrackDetailsAlbumText: {
        color: 'rgba(255, 255, 255, 0.72)',
        // width: 200,
        textAlign: 'center',
        fontSize: 14,
        marginTop: 4,
    },

    TrackDetailsButton: {
        opacity: 0.72,
    },

    TrackDetailsMoreButton: {
        borderColor: 'rgb(255, 255, 255)',
        borderWidth: 2,
        opacity: 0.72,
        borderRadius: 10,
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    TrackDetailsMoreButtonIcon: {
        height: 17,
        width: 17,
    },

    SeekBarSlider: {
        marginTop: -12,
    },

    SeekBarContainer: {
        // paddingHorizontal: '1rem',
        width: '100%',
        paddingTop: 16,
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
        color: 'rgba(255, 255, 255, 0.72)',
        // adjustsFontSizeToFit: true,
        fontSize: '0.75rem',
        textAlign:'center',
        width: '2.5rem',
    },

    DownloadButton: {
        backgroundColor: buttonBlue,
        alignItems: 'center',
        justifyContent: 'center',
        width: '6rem',
        height: '1.5rem',
        marginLeft: '0.5rem',
        borderRadius: 15,
    },

    SyncButton: {
        backgroundColor: buttonBlue,
        alignItems: 'center',
        justifyContent: 'center',
        width: '8rem',
        width: '1.5rem',
        marginRight: '0.5rem',
        borderRadius: 15,
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

    Playlist: {
        alignSelf: 'center',
        justifyContent: 'flex-start',
        width: '95%',
        height: '39%',
        height: height * 0.30,
        marginTop: '0.3rem',
        paddingTop: '0.5rem',
        backgroundColor: greyBg,
        borderRadius: 15,
    },

    TrackListContainer: {
        flex: 1,
        alignSelf: 'center',
        height: '80%',
        width: '95%',
    },

    TrackList: {
        flex: 1,
        paddingHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    TrackName: {
        flex: 1,
    },

    Off: {
        opacity: 0.6,
    },

    Active: {
        fontWeight: 'bold',
        backgroundColor: '#708090',
    },

    ActiveIcon: {
        flex: 1,
        color: 'white',
        fontSize: '1rem',
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

    TinyTextNormal: {
        ...normalFont,
        fontSize: '0.75rem',
    },

    BottomNavTextPirate: {
        ...pirateFont,
        fontSize: '1.1rem',
    },

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

    ListenHostIcons: {
        textAlign: 'center',
        fontSize: '4rem',
        color: 'white'
    },

    SmallWhiteIcon: {
        color: 'white',
        fontSize: '0.85rem',
    },

    CaptainIconMedium: {
        width: '2rem',
        height: '2rem',
    },

    CaptainIconSmall: {
        width: '1.0rem',
        height: '1.0rem',
    },

    LogoutIcon: {
        marginTop: 3,
        fontSize: '1.55rem',
        marginBottom: 5,
        marginRight: 15,
        color: 'white',
    },
    
    PirateShipIcon: {
        width: '4.4rem',
        height: '4.4rem',
        marginRight: 10,
        position: 'relative',
        bottom: 15,
    },

    PirateWheelIconMedium: {
        width: 25,
        height: 25,
    },

    PirateShipIconSmall: {
        width: 20,
        height: 20,
    },

    PirateShipIconTiny: {
        width: 15,
        height: 15,
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

      ControlsContainer: {
        height: '15%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 8,
      },

      ControlsPlayButton: {
        height: 72,
        width: 72,
        borderWidth: 0,
        borderColor: 'white',
        borderRadius: 36,
        alignItems: 'center',
        justifyContent: 'center',
      },

      ControlsSecondaryControl: {
        height: 18,
        width: 18,
      },

      ControlsOff: {
        opacity: 0.30,
      },
})