import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import { BottomNav } from '../components/BottomNav';
import { SeaBackground } from '../components/SeaBackground';

export default class AuthLoadingScreen extends React.Component {
    static navigationOptions = {
        header: null,
        };
    constructor() {
        super();
    }

    componentDidMount(){
        this.checkLogin();
    }

    // Fetch the token from storage then navigate to our appropriate place
    checkLogin = async () => {
        const userToken = await AsyncStorage.getItem('userToken');

        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        this.props.navigation.navigate(userToken ? 'CaptainScreen' : 'SignInScreen');
    };

    // Render any loading content that you like here
    render() {
        return (
            <SeaBackground>
                <View style={styles.container}>
                    <ActivityIndicator />
                    <StatusBar barStyle="default" />
                    <View style={styles.Footer}>
                        <BottomNav navigation={this.props.navigation}/>
                    </View>
                </View>
            </SeaBackground>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});