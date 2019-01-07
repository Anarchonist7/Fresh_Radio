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
        <View style={Styles.SignInContainer}>
          <TextInput
            value={this.state.username}
            onChangeText={(username) => this.setState({ username })}
            placeholder={'Username'}
            style={Styles.SignInInput}
            autoCapitalize='none'
          />
          <TextInput
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
            placeholder={'Password'}
            secureTextEntry={true}
            style={Styles.SignInInput}
            autoCapitalize='none'
          />
          
          <TouchableOpacity
            title={'Login'}
            style={Styles.SignInLogin}
            onPress={this._signInAsync}>
            <Text style={Styles.SignInLoginText}>
              Login
            </Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.Footer}>
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

