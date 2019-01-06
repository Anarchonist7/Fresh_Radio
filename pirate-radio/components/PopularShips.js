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

export default class PopularShips extends React.Component {


    constructor(props){
        super(props)
        this.state = {
            resultsList: []
        }
    }

    generateResultsList(){
        let resultsComponentArray = [];
        this.props.searchResults.slice(-3).reverse().forEach((result, i) => {
            resultsComponentArray.push(
                <TouchableOpacity
                    key={i}
                    style={Styles.SearchList} 
                    onPress={() => {
                        this.props.navigation.navigate('ShipCrewScreen', { shipId: result.shipId  })
                    }}>
                    <View key={i} style={Styles.PopularFirstLine}>
                        <Text style={Styles.SmallTextPirate}>
                            <Image source={PiratePNG} style={ Styles.CaptainIconSmall }/> { result.captain }
                        </Text>
                        <Text style={Styles.SmallTextNormal}>
                            Crew: { result.crewNum }
                        </Text>
                    </View>
                    <Text style={Styles.SmallTextNormal}>
                        <Image source={PirateShipPNG} style={Styles.PirateShipIconTiny} /> { result.shipName }
                    </Text>
                </TouchableOpacity>
            )
          return   
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