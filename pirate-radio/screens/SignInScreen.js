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
import { BottomNav } from '../components/BottomNav';
import Styles from '../assets/styles/AppStyles';
import { Ionicons, Feather } from '@expo/vector-icons';

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
        this.props.screenProps.authCaptain(this.state.username.toLowerCase()).then((response) => {
          AsyncStorage.setItem('userToken', response.toString());
          this.props.navigation.navigate('CaptainScreen');
        })
    };

    checkLogin = async () => {
      const userToken = await AsyncStorage.getItem('userToken');
      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      if(userToken) {
        this.props.navigation.navigate('CaptainScreen');
      }
    };

    componentDidMount(){
        this.checkLogin();
    }
    
    render() {
        return (
          <SeaBackground>
            <View></View>
            <TouchableOpacity style={[Styles.ListenHostButtons, {lineHeight: this.height}]}>
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
            </TouchableOpacity>

              
              <View style={styles.Footer}>
                <BottomNav 
                  navigation={this.props.navigation} 
                  muteOrUnmute={this.props.screenProps.muteOrUnmute} 
                  resetMute={this.props.screenProps.resetMute} 
                  isMuted={this.props.screenProps.isMuted}/>
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

