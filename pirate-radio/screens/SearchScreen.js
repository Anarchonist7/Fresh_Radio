import React from 'react';
import { Image, ImageBackground, TouchableOpacity, View, Text, ListView, StyleSheet } from 'react-native';

export default class SearchScreen extends React.Component {
    constructor(props){
        super(props)
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        state = {
            dataSource: ds.cloneWithRows(['row 1', 'row 2']),
        };
    }
    
    render() {
        return (
            <View>
                <View> 
                    <Text>Search</Text>
                </View>

                <View>
                    <Text>Search Results</Text>
                    <Text>Nothin hurrr</Text>
                </View>
                <ListView> 
                    <Text>Popular Ships</Text>
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text>{rowData}</Text>}
                </ListView>
            </View>
        )
    }
}