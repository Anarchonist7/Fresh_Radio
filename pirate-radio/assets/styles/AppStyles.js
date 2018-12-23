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

    boxes: {
        height: '100%',
        width: '100%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    search: {
        alignSelf: 'center',
        justifyContent: 'center',
        width: '95%',
        height: '10%',
        marginTop: 35,
        backgroundColor: '#383131',
        borderRadius: 15,
    },
    results: {
        alignSelf: 'center',
        justifyContent: 'center',
        width: '95%',
        height: '30%',
        marginVertical: 15,
        backgroundColor: '#383131',
        borderRadius: 15,
    },
    popular: {
        alignSelf: 'center',
        justifyContent: 'center',
        width: '95%',
        height: '30%',
        marginVertical: 15,
        backgroundColor: '#383131',
        borderRadius: 15,
    },
    footer: {
        height: '14%'
    },

    bigText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 32,
    },

    smallText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
    },
    off: {
        opacity: 0.30,
      },
      
    active: {
        fontWeight: 'bold',
    },
    BottomNavcontainer: {
        height: '100%',
        width: '100%'
    },
    BottomNavElements: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    BottomNavButtonContainer: {
        justifyContent: 'center',
        flex: 0.23,
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
        fontSize: 50,
    },

})