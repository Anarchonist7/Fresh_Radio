import React, { Component } from 'react';
import {
    Alert,
    Button,
    TextInput,
    StyleSheet,
    View,
    AsyncStorage
} from 'react-native';

import { SeaBackground } from '../components/SeaBackground';

export default class SignInScreen extends React.Component {
    static navigationOptions = {
        title: 'Please sign in',
    };

    constructor(props) {
        super(props);
        
        this.state = {
          username: '',
          password: '',
        };
      }

    onLogin() {
        const { username, password } = this.state;
        Alert.alert('Credentials', `${username} + ${password}`);
    }

    _signInAsync = async () => {
        //make a request to server with Username and Password
            //server checks against database
            //server responds with token or NULL
        //if response in !null...
        // await AsyncStorage.setItem('userToken', responseFROMserverTOKEN);
        //else
        // SORRY, try again
        
        await AsyncStorage.setItem('userToken', this.state.username);
        this.props.navigation.navigate('CaptainScreen');
    };
    
    render() {
        return (
          <SeaBackground>
            <View style={styles.container}>
              <TextInput
                value={this.state.username}
                onChangeText={(username) => this.setState({ username })}
                placeholder={'Username'}
                style={styles.input}
              />
              <TextInput
                value={this.state.password}
                onChangeText={(password) => this.setState({ password })}
                placeholder={'Password'}
                secureTextEntry={true}
                style={styles.input}
              />
              
              <Button
                title={'Login'}
                style={styles.input}
                onPress={this._signInAsync}
              //   onPress={this.onLogin.bind(this)}
              />
            </View>
          </SeaBackground>
        );
      }
    };
    

const styles = StyleSheet.create({
    container: {
      width: '90%',
      height: '90%',
      position: 'relative',
      top: '5%',
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(255,255,255,0.90)',
    },
    input: {
      width: 200,
      height: 44,
      padding: 10,
      borderWidth: 1,
      borderColor: 'black',
      marginBottom: 10,
      backgroundColor: 'white',
    },
});

