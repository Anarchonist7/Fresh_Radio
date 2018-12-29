import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
import { SeaBackground } from '../components/SeaBackground';

import { SearchBar } from 'react-native-elements';

import { withNavigation } from 'react-navigation';
import { BottomNav } from '../components/BottomNav';
import SearchResults from '../components/SearchResults';

import Styles from '../assets/styles/AppStyles';

import { SimpleLineIcons } from '@expo/vector-icons';

export default class SearchScreen extends React.Component {
    
    static NavigationOptions = { header: { visibile: false } };

    constructor(props){
        super(props)
        this.state = {
            searchText: '',
            foundShip: false,
            searchResults: []
        };
    }
    
    navigateToShipCrew = () => this.props.navigation.navigate('ShipCrewScreen');
    
    searchShips = () => {
        fetch(`${this.props.screenProps.shipQueryRequest}?search=${this.state.searchText}`, {
            method: 'GET',
        }).then((responseData, error) => {
            if (error){
                throw new Error('Error: ', error);
            } else {
                const response = JSON.parse(responseData._bodyText)
                this.setState({
                    searchText: '',
                    foundShip: true,
                    searchResults: response
                })
                console.log("searchResults", this.state.searchResults);
            }
        })
    }

    render() {
        const { ship } = this.props.screenProps;

        return (
            <SeaBackground>
                <View style={Styles.Boxes}>
                    <View style={Styles.Search}>
                        <SearchBar
                            ref={SearchBar => {this.SearchBar = SearchBar}}
                            autoCorrect={false}
                            autoCapitalize='none'
                            clearIcon={{ color: 'white' }}
                            inputStyle={Styles.SmallTextNormal}
                            onChangeText={(searchText) => this.setState({searchText})}
                            placeholder='Search'
                            placeholderTextColor='white'
                            onEndEditing={this.searchShips}
                        />
                    </View>

                    <View style={Styles.Results}>
                        <Text style={[Styles.BigTextPirate, Styles.ListHeader]}>Search Results{'\n'}</Text>
                        {   this.state.foundShip ? (
                            <SearchResults 
                                searchResults={this.state.searchResults} 
                                navigation={this.props.navigation}
                            />
                        ) : (
                            <Text style={[Styles.SmallTextPirate, {paddingLeft: 15}]}>
                                Nothin hurrr
                            </Text>
                        )}
                    </View>

                    <View style={Styles.Popular}>
                        <Text style={[Styles.BigTextPirate, Styles.ListHeader]}>Popular Ships{'\n'}</Text>
                        <TouchableOpacity style={Styles.ShipList} onPress={ this.navigateToShipCrew }>
                            <Text style={Styles.SmallTextNormal}><SimpleLineIcons style={Styles.SmallWhiteIcon} name="anchor"/> arrrRave</Text>
                            <Text style={Styles.SmallTextNormal}>Crew: 11</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.ShipList} onPress={ this.navigateToShipCrew }>
                            <Text style={Styles.SmallTextNormal}><SimpleLineIcons style={Styles.SmallWhiteIcon} name="anchor" /> Captain Barbosa</Text>
                            <Text style={Styles.SmallTextNormal}>Crew: 4</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.ShipList} onPress={ this.navigateToShipCrew }>
                            <Text style={Styles.SmallTextNormal}><SimpleLineIcons style={Styles.SmallWhiteIcon} name="anchor"/> Lonely John</Text>
                            <Text style={Styles.SmallTextNormal}>Crew: 8</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={Styles.Footer}>
                    <BottomNav navigation={this.props.navigation} />
                </View>
            </SeaBackground>
        )
    }
}