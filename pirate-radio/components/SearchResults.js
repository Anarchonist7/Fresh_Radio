import React, { Component } from 'react';
import { SimpleLineIcons } from '@expo/vector-icons';
const PiratePNG = require('../assets/images/pirate.png');
const PirateShipPNG = require('../assets/images/pirate-ship.png');

import {
  View,
  Text,
  Image,
  TouchableOpacity,
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
        let resultsComponentArray = [];
        this.props.searchResults.forEach((result, i) => {
            resultsComponentArray.push(
                <TouchableOpacity 
                    style={Styles.SearchList} 
                    onPress={() => {
                        this.props.navigation.navigate('ShipCrewScreen', {
                            shipId: result.shipId
                        })
                    }}
                >
                    <View key={i} style={[, {flexDirection: 'row', justifyContent: 'space-between'}]}>
                        <Text key={i + 500} style={Styles.SmallTextPirate}>
                            <Image key={i + 400} source={PiratePNG} style={ Styles.CaptainIconSmall }/> { result.captain }
                        </Text>
                        <Text key={i + 200} style={Styles.SmallTextNormal}>
                            Crew: { result.crewNum }
                        </Text>
                    </View>
                    <Text key={i + 100} style={Styles.SmallTextNormal}>
                        <Image key={i + 800} source={PirateShipPNG} style={Styles.PirateShipIconSmall} /> { result.shipName }
                    </Text>
                </TouchableOpacity>
            )
        })
        return resultsComponentArray
    }

    onComponentDidMount(){
        this.generateResultsList()
    }

    render(){
        return this.generateResultsList()
    }
}