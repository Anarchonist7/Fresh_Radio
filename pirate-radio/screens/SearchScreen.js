import React from 'react';
import { Image, ImageBackground, TouchableOpacity, View, Text, ListView, StyleSheet } from 'react-native';
import { BottomNav } from '../components/BottomNav';
import { PirateText } from '../components/PirateText';


import { SeaBackground } from '../components/SeaBackground';


export default class SearchScreen extends React.Component {
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
                <View style={styles.boxes}>
                    <View style={styles.search}> 
                        <PirateText style={styles.bigText}>Search</PirateText>
                    </View>

                    <View style={styles.results}>
                        <PirateText style={styles.bigText}>Search Results{'\n'}</PirateText>
                        <PirateText style={styles.smallText}>Nothin hurrr</PirateText>
                    </View>

                    <View style={styles.popular}>
                        <PirateText style={styles.bigText}>Popular Ships{'\n'}</PirateText>
                        <PirateText style={styles.smallText}>arrrRave</PirateText>
                        <PirateText style={styles.smallText}>Captain Barbosa</PirateText>
                        <PirateText style={styles.smallText}>Lonely John</PirateText>
                    </View>
                    {/* <ListView> 
                        <PirateText>Popular Ships</PirateText>
                        dataSource={this.state.dataSource}
                        renderRow={(rowData) => <PirateText>{rowData}</PirateText>}
                    </ListView> */}
                    <View style={styles.footer}>
                        <BottomNav/>
                    </View>
                </View>
            </SeaBackground>
        )
    }
}

styles = StyleSheet.create({
    boxes: {
        height: '100%',
        width: '100%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    search: {
        alignSelf: 'center',
        justifyContent: 'center',
        width: '95%',
        height: '10%',
        marginTop: 35,
        backgroundColor: '#383131',
        borderRadius: 15,
    },
    results: {
        alignSelf: 'center',
        justifyContent: 'center',
        width: '95%',
        height: '30%',
        marginVertical: 15,
        backgroundColor: '#383131',
        borderRadius: 15,
    },
    popular: {
        alignSelf: 'center',
        justifyContent: 'center',
        width: '95%',
        height: '30%',
        marginVertical: 15,
        backgroundColor: '#383131',
        borderRadius: 15,
    },
    footer: {
        height: '14%'
    },

    bigText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 32,
    },

    smallText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
    }
})