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
        alignSelf: 'center',
        justifyContent: 'center',
        width: '95%',
        height: '10%',
        backgroundColor: '#383131',
        marginTop: '5%',
        borderRadius: 15,
    },
    Results: {
        alignSelf: 'center',
        justifyContent: 'flex-start',
        width: '95%',
        height: '40%',
        marginVertical: 10,
        paddingTop: 15,
        backgroundColor: '#383131',
        borderRadius: 15,
    },
    Popular: {
        alignSelf: 'center',
        justifyContent: 'flex-start',
        width: '95%',
        height: '45%',
        marginVertical: 10,
        paddingTop: 15,
        backgroundColor: '#383131',
        borderRadius: 15,
    },
    Footer: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        height: '14%',
        width: '100%'
    },

    BigText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 32,
    },

    SmallText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
    },
      
    Active: {
        fontWeight: 'bold',
    },
    BottomNavContainer: {
        height: '100%',
        width: '100%'
    },
    BottomNavElements: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
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

})