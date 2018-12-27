import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { withNavigation } from 'react-navigation';
import { BottomNav } from '../components/BottomNav';
import { PirateText } from '../components/PirateText';
import Styles from '../assets/styles/AppStyles';

import { SimpleLineIcons } from '@expo/vector-icons';

import { SeaBackground } from '../components/SeaBackground';


export default class SearchScreen extends React.Component {
    
    static NavigationOptions = { header: { visibile: false } };

    constructor(props){
        super(props)
    }

    navigateToShipCrew= () => this.props.navigation.navigate('ShipCrewScreen');

    
    render() {

        const { ship } = this.props.screenProps;

        navigateToShipCrew= () => this.props.navigation.navigate('ShipCrewScreen');


        return (
            <SeaBackground>
                <View style={Styles.Boxes}>
                    <View style={Styles.Search}> 
                        <PirateText style={Styles.BigText}>Search</PirateText>
                    </View>

                    <View style={Styles.Results}>
                        <PirateText style={[Styles.BigText, Styles.ListHeader]}>Search Results{'\n'}</PirateText>
                        <PirateText style={[Styles.SmallText, {paddingLeft: 15}]}>Nothin hurrr</PirateText>
                    </View>

                    <View style={Styles.Popular}>
                    
                        <PirateText style={[Styles.BigText, Styles.ListHeader]}>Popular Ships{'\n'}</PirateText>
                        <View style={Styles.ShipList}>
                            <PirateText style={Styles.SmallText}><SimpleLineIcons style={Styles.AnchorIcon} name="anchor"/> arrrRave</PirateText>
                            <PirateText style={Styles.SmallText}>Crew: 11</PirateText>
                        </View>
                        <View style={Styles.ShipList}>
                            <PirateText style={Styles.SmallText} onPress={ this.navigateToShipCrew }><SimpleLineIcons style={Styles.AnchorIcon} name="anchor" /> Captain Barbosa</PirateText>
                            <PirateText style={Styles.SmallText}>Crew: 4</PirateText>
                        </View>
                        <View style={Styles.ShipList}>
                            <PirateText style={Styles.SmallText}><SimpleLineIcons style={Styles.AnchorIcon} name="anchor"/> Lonely John</PirateText>
                            <PirateText style={Styles.SmallText}>Crew: 8</PirateText>
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