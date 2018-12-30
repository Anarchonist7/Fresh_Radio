import React, { Component } from 'react';
import {
    Alert,
    Button,
    Text,
    TouchableOpacity,
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
            <View style={styles.Container}>
              <TextInput
                value={this.state.username}
                onChangeText={(username) => this.setState({ username })}
                placeholder={'Username'}
                style={styles.Input}
              />
              <TextInput
                value={this.state.password}
                onChangeText={(password) => this.setState({ password })}
                placeholder={'Password'}
                secureTextEntry={true}
                style={styles.Input}
              />
              
              <TouchableOpacity
                title={'Login'}
                style={styles.Login}
                onPress={this._signInAsync}
              //   onPress={this.onLogin.bind(this)}
              >
                <Text style={styles.LoginText}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </SeaBackground>
        );
      }
    };
    

const styles = StyleSheet.create({
    Container: {
      width: '92%',
      height: '92%',
      position: 'relative',
      top: '5%',
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.84)',
    },
    Input: {
      width: 200,
      height: 44,
      padding: 10,
      borderWidth: 1,
      borderColor: 'black',
      marginBottom: 10,
      backgroundColor: 'white',
    },
    Login: {
      width: 105,
      height: 30,
      padding: 5,
      borderWidth: 1,
      borderRadius: 60,
      borderColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'mediumslateblue',
    },
    LoginText: {
      fontSize: 15,
    }
});

