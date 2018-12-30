'use strict' 

import React from 'react';
import { StyleSheet } from 'react-native';

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
        marginTop: '13%'
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

    ShipHeader: {
        paddingTop: 20,
        paddingBottom: 5,
        paddingLeft: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignSelf: 'center',
        justifyContent: 'space-between',
        width: '95%',
        height: '10%',
        backgroundColor: '#383131',
        borderRadius: 15,
    },

    CaptainHeader: {
        paddingTop: 20,
        paddingLeft: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignSelf: 'center',
        justifyContent: 'space-between',
        width: '95%',
        height: '10%',
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
        marginTop: 5,
        paddingTop: 10,
        alignSelf: 'center',
        justifyContent: 'space-between',
        width: '95%',
        height: '45%',
        backgroundColor: '#383131',
        borderRadius: 15,
    },

    ShipFormContainer: {
        alignSelf: 'center',
        width: '95%',
        height: '78%',
        backgroundColor: 'grey',
        marginBottom: 13,
        borderRadius: 15,
    },

    ShipFormInputs: {
        width: '95%',
        height: '15%',
        alignSelf: 'center',
        marginTop: 5,
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: 'white',
        opacity: 0.8,
        padding: 2,
    },

    ShipFormButton: {
        width: '35%',
        height: '13%',
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        borderRadius: 15,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: '#424faf',
        marginRight: 10,
        padding: 5,
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
        fontWeight: 'bold',
    },

    ShipFormButtonIcon: {
        fontSize: 18,
    },

    YeOldShips: {
        marginTop: 5,
        paddingTop: 10,
        paddingHorizontal: 10,
        flexDirection: 'column',
        alignSelf: 'center',
        justifyContent: 'flex-start',
        width: '95%',
        height: '35%',
        backgroundColor: '#383131',
        borderRadius: 15,
    },

    YeOldShipsContainer: {
        marginTop: 20,
        width: '100%',
        height: '78%',
    },

    YeOldShipsItems: {
        width: '100%',
        height: '15%',
        borderRadius: 10,
        marginTop: 8,
        backgroundColor: 'grey',
        paddingHorizontal: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    Results: {
        alignSelf: 'center',
        justifyContent: 'flex-start',
        width: '95%',
        height: '44%',
        marginTop: 5,
        paddingTop: 10,
        backgroundColor: '#383131',
        borderRadius: 15,
    },
    
    NowPlaying: {
        alignSelf: 'center',
        justifyContent: 'flex-start',
        width: '95%',
        height: '38%',
        marginTop: '5%',
        paddingTop: 15,
        backgroundColor: '#383131',
        borderRadius: 15,
    },

    Popular: {
        alignSelf: 'center',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '95%',
        height: '37%',
        marginTop: 5,
        paddingTop: 10,
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
        height: '25%',
        borderRadius: 5,
        marginTop: 5,
        marginHorizontal: 8,
        backgroundColor: 'grey',
        padding: 5,
    },

    Playlist: {
        alignSelf: 'center',
        justifyContent: 'flex-start',
        width: '95%',
        height: '32%',
        marginTop: '5%',
        paddingTop: 15,
        backgroundColor: '#383131',
        borderRadius: 15,
    },

    TrackList: {
        paddingHorizontal: 5,
    },

    Footer: {
        position: 'absolute',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        top: '88%',
        height: '14%',
        width: '100%'
    },

    ListHeader: {
        marginBottom: '-5%',
    },

    ListenHostText: {
        fontFamily: 'BlackPearl',
        color: 'white',
        fontSize: 60,
        textAlign: 'center',
    },

    BigTextPirate: {
        fontFamily: 'BlackPearl',
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

    MediumTextPirateBlack: {
        fontFamily: 'BlackPearl',
        color: 'black',
        textAlign: 'center',
        fontSize: 22,
    },

    BigTextNormal: {
        fontFamily: 'Times New Roman',
        color: 'white',
        textAlign: 'center',
        fontSize: 28,
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
      
    Off: {
        opacity: 0.6,
    },

    Active: {
        fontWeight: 'bold',
    },

    BottomNavElements: {
        height: '100%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    BottomNavButtonContainerIOS: {
        justifyContent: 'center',
        width: '20%',
        height: '65%',
        borderRadius: 40,
        backgroundColor: '#383131',
    },
    BottomNavButtonContainerAndroid: {
        justifyContent: 'center',
        width: '16%',
        height: '70%',
        borderRadius: 40,
        backgroundColor: '#383131',
    },
    BottomNavBackContainer: {
        marginLeft: 10,
    },

    BottomNavVolumeContainer: {
        marginRight: 10,
    },

    ListenHostIcons: {
        textAlign: 'center',
        fontSize: 60,
        color: 'white'
    },

    BottomNavIcons: {
        textAlign: 'center',
        color: 'white',
        fontSize: 40,
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

    PirateShipIconMedium: {
        width: 30,
        height: 30,
    },

    PirateShipIconSmall: {
        width: 20,
        height: 20,
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
})