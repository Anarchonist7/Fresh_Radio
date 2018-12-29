import React from 'react';
import {
    AsyncStorage,
    Button,
    StatusBar,
    StyleSheet,
    View,
    Text
} from 'react-native';

export default class OtherScreen extends React.Component {
    static navigationOptions = {
        title: 'Lots of features here',
    };

    constructor(props){
        super(props)
        this.state = {
            userToken: 'none'
        }
        this._bootstrapAsync()
    }

    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('userToken');
        this.setState({
            userToken: userToken
        })
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>User token: {this.state.userToken}</Text>
                <Button title="I'm done, sign me out" onPress={this._signOutAsync} />
                <StatusBar barStyle="default" />
            </View>
        );
    }

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('HomeScreen');
    };
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});