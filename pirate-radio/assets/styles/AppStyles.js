'use strict' 

import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


module.exports = StyleSheet.create({
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
        backgroundColor: '#383131',
        borderRadius: 15,
    },

    CaptainHeader: {
        height: '10%',
        width: '95%',
        paddingLeft: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#383131',
        borderRadius: 15,
    },

    ShipCrewHeader: {
        height: '10%',
        width: '95%',
        paddingLeft: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#383131',
        borderRadius: 15,
    },

    ShipCaptainHeader: {
        height: '10%',
        width: '95%',
        paddingLeft: 10,
        paddingBottom: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#383131',
        borderRadius: 15,
    },

    CaptainHeaderTickerContainer: {
        width: '73%',
    },

    CaptainHeaderText: {
        fontFamily: 'BlackPearl',
        color: 'white',
        fontSize: 28,
    },

    NewShip: {
        height: 295,
        width: '95%',
        marginTop: '2%',
        paddingTop: 10,
        flexDirection: 'column',
        alignSelf: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#383131',
        borderRadius: 15,
    },

    ShipFormContainer: {
        height: 220,
        width: '95%',
        backgroundColor: 'grey',
        alignSelf: 'center',
        marginTop: '2%',
        marginBottom: '2%',
        paddingBottom: '2%',
        borderRadius: 7,
    },

    ShipFormInputs: {
        fontFamily: 'Times New Roman',
        width: '95%',
        height: '15%',
        alignSelf: 'center',
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: 'white',
        opacity: 0.8,
        marginTop: 5,
        paddingLeft: 8,
    },

    ShipFormButton: {
        width: '35%',
        height: 30,
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: '#424faf',
        marginTop: '2%',
        marginRight: 10,
        paddingHorizontal: 5,
    },

    ShipFormLabelText: {
        fontWeight: 'bold',
        fontFamily: 'Times New Roman',
        marginTop: 5,
        marginLeft: 10,
    },

    ShipFormButtonText: {
        fontFamily: 'Times New Roman',
        fontSize: 18,
    },

    ShipFormButtonIcon: {
        fontSize: 18,
    },

    YeOldShips: {
        height: '30%',
        width: '95%',
        marginTop: '2%',
        paddingTop: 10,
        flexDirection: 'column',
        alignSelf: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#383131',
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
        marginTop: '2%',
        paddingTop: 10,
        backgroundColor: '#383131',
        borderRadius: 15,
    },

    ResultsContainer: {
        alignSelf: 'center',
        width: '95%',
        height: '80%',
        marginTop: '2%',
        marginBottom: '2%',
        paddingTop: 10,
        borderRadius: 10,
        backgroundColor: 'grey',
    },

    PopularContainer: {
        alignSelf: 'center',
        width: '95%',
        height: '80%',
        marginTop: '2%',
        marginBottom: '2%',
        borderRadius: 10,
        backgroundColor: 'grey',
    },
    
    NowPlayingCaptain: {
        alignSelf: 'center',
        justifyContent: 'flex-start',
        width: '95%',
        height: 280,
        marginTop: '2%',
        paddingTop: 10,
        backgroundColor: '#383131',
        borderRadius: 15,
    },

    NowPlayingCrew: {
        alignSelf: 'center',
        justifyContent: 'flex-start',
        width: '95%',
        height: 220,
        marginTop: '2%',
        paddingTop: 10,
        backgroundColor: '#383131',
        borderRadius: 15,
    },

    DownloadButton: {
        paddingTop: 10,
        justifyContent: 'column',
        alignSelf: 'center',
        justifyContent: 'center',
    },

    Popular: {
        alignSelf: 'center',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '95%',
        height: '35%',
        paddingTop: 10,
        marginTop: '2%',
        backgroundColor: '#383131',
        borderRadius: 15,
    },

    ShipList: {
        width: '95%',
        height: '17%',
        borderRadius: 5,
        marginTop: 5,
        backgroundColor: 'grey',
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    SearchList: {
        width: '95%',
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 5,
        marginHorizontal: 8,
        backgroundColor: 'grey',
        paddingVertical: '2%',
        paddingHorizontal: '2%',
    },

    Playlist: {
        alignSelf: 'center',
        justifyContent: 'flex-start',
        width: '95%',
        height: '39%',
        marginTop: 5,
        paddingTop: 10,
        backgroundColor: '#383131',
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
    },

    ActiveIcon: {
        flex: 1,
        color: 'white',
        fontSize: 18,
    },

    OffIcon: {
        opacity: 0,
    },

    ListenHostText: {
        fontFamily: 'BlackPearl',
        color: 'white',
        fontSize: 60,
        textAlign: 'center',
    },

    BigTextPirate: {
        marginBottom: '-10%',
        fontFamily: 'BlackPearl',
        color: 'white',
        textAlign: 'center',
        fontSize: 28,
    },

    BigTextNormal: {
        marginBottom: '-10%',
        fontFamily: 'Times New Roman',
        color: 'white',
        textAlign: 'center',
        fontSize: 28,
    },

    MediumTextPirate: {
        fontFamily: 'BlackPearl',
        color: 'white',
        textAlign: 'center',
        fontSize: 22,
    },

   MediumTextNormal: {
        fontFamily: 'Times New Roman',
        color: 'white',
        fontSize: 22,
    },

    SmallTextPirate: {
        fontFamily: 'BlackPearl',
        color: 'white',
        fontSize: 18,
    },

    SmallTextNormal: {
        fontFamily: 'Times New Roman',
        color: 'white',
        fontSize: 18,
    },

    TinyTextNormal: {
        fontFamily: 'Times New Roman',
        color: 'white',
        fontSize: 12,
    },

    BottomNavTextPirate: {
        fontFamily: 'BlackPearl',
        color: 'white',
        fontSize: 20,
        includeFontPadding: true,
    },

    Footer: {
        position: 'absolute',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        top: '90%',
        height: '14%',
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
        width: '45%',
        height: '50%',
        borderRadius: 40,
        backgroundColor: '#383131',
    },
    BottomNavButtonContainerAndroid: {
        justifyContent: 'center',
        width: '45%',
        height: '20%',
        aspectRatio: 3/1,
        borderRadius: 40,
        backgroundColor: '#383131',
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
        fontSize: 20,
    },

    BottomNavVolumeIcon: {
        textAlign: 'right',
        color: 'white',
        fontSize: 20,
    },

    ListenHostIcons: {
        textAlign: 'center',
        fontSize: 60,
        color: 'white'
    },

    SmallWhiteIcon: {
        color: 'white',
        fontSize: 14,
    },

    SmallBlackIcon: {
        color: 'black',
        fontSize: 14,
    },

    CaptainIconMedium: {
        width: 35,
        height: 35,
        marginBottom: 5,
    },

    CaptainIconSmall: {
        width: 20,
        height: 20,
    },

    LogoutIcon: {
        marginTop: 3,
        fontSize: 28,
        marginBottom: 5,
        marginRight: 15,
        color: 'white',
    },
    
    PirateShipIcon: {
        width: 80,
        height: 80,
        marginRight: 10,
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

    TrackDetailsContainer: {
        paddingTop: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 40,
        paddingRight: 20,
    },

    TrackDetailsWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 50,
    },

    TrackDetailsTitle: {
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
    },

    TrackDetailsArtist: {
        color: 'rgba(255, 255, 255, 0.72)',
        width: 200,
        textAlign: 'center',
        fontSize: 18,
        marginTop: 4,
    },

    TrackDetailsAlbum: {
        color: 'rgba(255, 255, 255, 0.72)',
        width: 200,
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

      SeekBarSlider: {
        marginTop: -12,
      },
      SeekBarContainer: {
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 16,
      },
      SeekBarTrack: {
        height: 2,
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
        fontSize: 12,
        textAlign:'center',
      },

})