'use strict' 

import React from 'react';
import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
    ListenHostButtons: {
        resizeMode: 'contain',
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
        marginTop: '13%'
    },

    Search: {
        paddingTop: 5,
        alignSelf: 'center',
        justifyContent: 'center',
        width: '95%',
        height: '10%',
        backgroundColor: '#383131',
        borderRadius: 15,
    },

    ShipHeader: {
        paddingTop: 5,
        paddingBottom: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        width: '95%',
        height: '10%',
        backgroundColor: '#383131',
        borderRadius: 15,
    },

    Results: {
        alignSelf: 'center',
        justifyContent: 'flex-start',
        width: '95%',
        height: '38%',
        marginTop: '5%',
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
        height: '32%',
        marginTop: '5%',
        paddingTop: 15,
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
        top: '86%',
        height: '14%',
        width: '100%'
    },

    ListHeader: {
        paddingTop: 15,
        marginBottom: '-5%',
    },

    ListenHostText: {
        color: 'white',
        fontSize: 60,
        textAlign: 'center',
    },

    BigText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 32,
    },

    SmallText: {
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

    CaptainIcon: {
        width: 35,
        height: 35,
        marginBottom: 5,
        resizeMode: 'contain',
    },
    
    PirateShipIcon: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
        marginRight: 10,
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
    }
})