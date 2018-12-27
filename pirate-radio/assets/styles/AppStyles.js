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

    ListenHostText: {
        color: 'white',
        fontSize: 60,
        textAlign: 'center',
    },

    ListenHostIcons: {
        textAlign: 'center',
        fontSize: 60,
        color: 'white'
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

    Footer: {
        position: 'absolute',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        top: '86%',
        height: '14%',
        width: '100%'
    },

    BigText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 32,
    },

    ListHeader: {
        paddingTop: 15,
        marginBottom: '-5%',
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

    BottomNavIcons: {
        textAlign: 'center',
        color: 'white',
        fontSize: 40,
    },

    container: {
        flex: 1,
        backgroundColor: 'rgb(4,4,4)',
    },

    audioElement: {
        height: 0,
        width: 0,
    }
})