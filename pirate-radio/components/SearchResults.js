import React, { Component } from 'react';
import { SimpleLineIcons } from '@expo/vector-icons';
const PiratePNG = require('../assets/images/pirate.png');
const PirateShipPNG = require('../assets/images/pirate-ship.png');

import {
  View,
  Text,
  Image,
} from 'react-native';

import Styles from '../assets/styles/AppStyles';

export default class SearchResults extends React.Component {


    constructor(props){
        super(props)
        this.state = {
            resultsList: []
        }
    }

    generateResultsList(){
        let resultsComponentArray = []
        this.props.searchResults.forEach((result, i) => {
            resultsComponentArray.push(
                <View style={Styles.SearchList}>
                    <View key={i} style={[, {flexDirection: 'row', justifyContent: 'space-between'}]}>
                        <Text style={Styles.SmallTextPirate}><Image source={PiratePNG} style={ Styles.CaptainIconSmall } /> { result.captain }</Text>
                        <Text style={Styles.SmallTextPirate}>Crew: { result.crewNum }</Text>
                    </View>
                    <Text key={i} style={Styles.SmallTextPirate}>
                        <Image source={PirateShipPNG} style={Styles.PirateShipIconSmall} /> { result.shipName }
                    </Text>
                </View>
            )
        })
        return resultsComponentArray
    }

    onComponentDidMount(){
        this.generateResultsList()
    }

    onComponentDidUpdate(){
    }

    render(){
        return this.generateResultsList()
    }

}