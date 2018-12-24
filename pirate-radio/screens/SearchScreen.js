import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { BottomNav } from '../components/BottomNav';
import { PirateText } from '../components/PirateText';
import Styles from '../assets/styles/AppStyles';


import { SeaBackground } from '../components/SeaBackground';


export default class SearchScreen extends React.Component {
    
    static NavigationOptions = { header: { visibile: false } };

    constructor(props){
        super(props)
        // const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        // state = {
        //     dataSource: ds.cloneWithRows(['row 1', 'row 2']),
        // };
    }

    
    render() {
        return (
            <SeaBackground>
                <View style={Styles.Boxes}>
                    <View style={Styles.Search}> 
                        <PirateText style={Styles.BigText}>Search</PirateText>
                    </View>

                    <View style={Styles.Results}>
                        <PirateText style={Styles.BigText}>Search Results{'\n'}</PirateText>
                        <PirateText style={Styles.SmallText}>Nothin hurrr</PirateText>
                    </View>

                    <View style={Styles.Popular}>
                        <PirateText style={Styles.BigText}>Popular Ships{'\n'}</PirateText>
                        <PirateText style={Styles.SmallText}>arrrRave</PirateText>
                        <PirateText style={Styles.SmallText}>Captain Barbosa</PirateText>
                        <PirateText style={Styles.SmallText}>Lonely John</PirateText>
                    </View>
                    {/* <ListView> 
                        <PirateText>Popular Ships</PirateText>
                        dataSource={this.state.dataSource}
                        renderRow={(rowData) => <PirateText>{rowData}</PirateText>}
                    </ListView> */}
                </View>
                <View style={Styles.Footer}>
                    <BottomNav navigation={this.props.navigation} />
                </View>
            </SeaBackground>
        )
    }
}