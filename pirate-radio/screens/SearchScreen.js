import React from 'react';
import { View, Text, TextInput, Image, StyleSheet, FlatList } from 'react-native';
import { SeaBackground } from '../components/SeaBackground';

import { SearchBar } from 'react-native-elements';

import { withNavigation } from 'react-navigation';
import { BottomNav } from '../components/BottomNav';
import SearchResults from '../components/SearchResults';

import Styles from '../assets/styles/AppStyles';

import { SimpleLineIcons } from '@expo/vector-icons';

const ENV = process.env.ENV || "development";
const PORT = process.env.PORT || 8080;
const LOCALHOST = process.env.LOCALHOST || 'http://localhost';

export default class SearchScreen extends React.Component {
    
    static NavigationOptions = { header: { visibile: false } };

    constructor(props){
        super(props)
        this.state = {
            searchText: '',
            foundTracks: false,
            searchResults: []
        };
    }

    shipRequest = LOCALHOST + ':' + PORT + '/ships/';
    
    searchShips = () => {
        // console.log(this.state.searchText);
        // console.log(this.shipRequest);
        fetch(`${this.shipRequest}?search=${this.state.searchText}`, {
            method: 'GET',
        }).then((responseData, error) => {
            // console.log(responseData);
            if (error){
                throw new Error('Error: ', error);
            } else {
                const response = JSON.parse(responseData._bodyText)
                // console.log(response);
                this.setState({
                    searchResults: response
                })
                console.log(this.state.searchResults);
                this.setState({
                    searchText: '',
                    foundTracks: true
                })
            }
        })
    }

    render() {
        
        const { ship } = this.props.screenProps;
        
        navigateToShipCrew = () => this.props.navigation.navigate('ShipCrewScreen');

        return (
            <SeaBackground>
                <View style={Styles.Boxes}>
                    <View style={Styles.Search}>
                        <SearchBar
                            inputStyle={Styles.SmallTextPirate}
                            onChangeText={(searchText) => this.setState({searchText})}
                            placeholder='Search'
                            placeholderTextColor='white'
                            onEndEditing={this.searchShips}
                        />
                    </View>

                    <View style={Styles.Results}>
                        <Text style={[Styles.BigTextPirate, Styles.ListHeader]}>Search Results{'\n'}</Text>
                        {   this.state.foundTracks ? (
                            <SearchResults 
                                searchResults={this.state.searchResults} 
                            />
                        ) : (
                            <Text style={[Styles.SmallTextPirate, {paddingLeft: 15}]}>Nothin hurrr</Text>
                        )}
                    </View>

                    <View style={Styles.Popular}>
                        <Text style={[Styles.BigTextPirate, Styles.ListHeader]}>Popular Ships{'\n'}</Text>
                        <View style={Styles.ShipList}>
                            <Text style={Styles.SmallTextPirate} onPress={ this.navigateToShipCrew }><SimpleLineIcons style={Styles.SmallWhiteIcon} name="anchor"/> arrrRave</Text>
                            <Text style={Styles.SmallTextPirate}>Crew: 11</Text>
                        </View>
                        <View style={Styles.ShipList}>
                            <Text style={Styles.SmallTextPirate} onPress={ this.navigateToShipCrew }><SimpleLineIcons style={Styles.SmallWhiteIcon} name="anchor" /> Captain Barbosa</Text>
                            <Text style={Styles.SmallTextPirate}>Crew: 4</Text>
                        </View>
                        <View style={Styles.ShipList}>
                            <Text style={Styles.SmallTextPirate} onPress={ this.navigateToShipCrew }><SimpleLineIcons style={Styles.SmallWhiteIcon} name="anchor"/> Lonely John</Text>
                            <Text style={Styles.SmallTextPirate}>Crew: 8</Text>
                        </View>
                    </View>
                </View>
                <View style={Styles.Footer}>
                    <BottomNav navigation={this.props.navigation} />
                </View>
            </SeaBackground>
        )
    }
}