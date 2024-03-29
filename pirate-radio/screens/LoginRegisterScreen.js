import React, { Component } from 'react';
import {
    Alert,
    Button,
    TextInput,
    StyleSheet,
    View,
    AsyncStorage
} from 'react-native';

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
        this.props.navigation.navigate('App');
    };
    
    render() {
        return (
          
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
               <View style={Styles.Footer}>
                            <BottomNav navigation={this.props.navigation}/>
                        </View>
          </View>
        );
      }
    };
    

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    },
    input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    },
});