import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { SeaBackground } from '../components/SeaBackground';

import { SearchBar } from 'react-native-elements';

import { withNavigation } from 'react-navigation';
import { BottomNav } from '../components/BottomNav';
import SearchResults from '../components/SearchResults';
import PopularShips from '../components/PopularShips';

import Styles from '../assets/styles/AppStyles';

import { SimpleLineIcons } from '@expo/vector-icons';

export default class SearchScreen extends React.Component {
    
    static NavigationOptions = { header: { visibile: false } };

    constructor(props){
        super(props)
        this.state = {
            searchText: '',
            foundShip: false,
            searchResults: [],
            popularShips: []
        }
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
                    searchResults: response,
                    popularShips: this.state.popularShips
                })
                console.log("searchResults", this.state.searchResults);
            }
        })
    }

    componentDidMount(){
        fetch(`${this.props.screenProps.shipQueryRequest}?search=${this.state.searchText}`,{method: 'GET'}).then((responseData, error) => {
            if (error){
                throw new Error('Error: ', error);
            } else {
                const response = JSON.parse(responseData._bodyText)
                this.setState({
                    popularShips: response
                })
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
                        <Text style={Styles.BigTextPirate}>Search Results{'\n'}</Text>
                        <View style={Styles.ResultsContainer}>
                            {   this.state.foundShip ? (
                                <SearchResults 
                                    updateCurrentShip={this.props.screenProps.updateCurrentShip}
                                    searchResults={this.state.searchResults} 
                                    navigation={this.props.navigation}
                                />
                            ) : (
                                <Text style={[Styles.SmallTextNormal, {paddingLeft: 15}]}>
                                    Nothin hurrr
                                </Text>
                            )}
                        </View>
                    </View>

                    <View style={Styles.Popular}>
                        <Text style={Styles.BigTextPirate}>Popular Ships{'\n'}</Text>

                         <PopularShips 
                                    updateCurrentShip={this.props.screenProps.updateCurrentShip}
                                    searchResults={this.state.popularShips} 
                                    navigation={this.props.navigation}
                                />

                        {/* <TouchableOpacity 
                            style={Styles.ShipList} 
                            onPress={() => { this.props.navigation.navigate('ShipCrewScreen', {shipId: 3})
                        }}>
                            <Text style={Styles.SmallTextNormal}><SimpleLineIcons style={Styles.SmallWhiteIcon} name="anchor"/> daveys-tunes</Text>
                            <Text style={Styles.SmallTextNormal}>Crew: 11</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={Styles.ShipList} 
                            onPress={() => { this.props.navigation.navigate('ShipCrewScreen', {shipId: 1})
                        }}>
                            <Text style={Styles.SmallTextNormal}><SimpleLineIcons style={Styles.SmallWhiteIcon} name="anchor" /> barbosa-beats</Text>
                            <Text style={Styles.SmallTextNormal}>Crew: 4</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={Styles.ShipList} 
                            onPress={() => { this.props.navigation.navigate('ShipCrewScreen', {shipId: 2})
                        }}>
                            <Text style={Styles.SmallTextNormal}><SimpleLineIcons style={Styles.SmallWhiteIcon} name="anchor"/> jacks-jams</Text>
                            <Text style={Styles.SmallTextNormal}>Crew: 8</Text>
                        </TouchableOpacity> */}
                    </View>
                </View>
                <View style={Styles.Footer}>
                    <BottomNav navigation={this.props.navigation} />
                </View>
            </SeaBackground>
        )
    }
}