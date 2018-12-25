import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import CaptainScreen from '../screens/CaptainScreen';
import ListenHostScreen from '../screens/ListenHostScreen';
import LandingScreen from '../screens/LandingScreen';
import LoginRegisterScreen from '../screens/LoginRegisterScreen';
import SearchScreen from '../screens/SearchScreen';
import ShipCaptainScreen from '../screens/ShipCaptainScreen';
import ShipCrewScreen from '../screens/ShipCrewScreen';

const AppNavigator = createStackNavigator(
  {
    'CaptainScreen': { screen: CaptainScreen },
    'HomeScreen': { screen: ListenHostScreen },
    'Splash': { screen: LandingScreen },
    'LoginRegisterScreen': { screen: LoginRegisterScreen },
    'SearchScreen': { screen: SearchScreen },
    'ShipCaptainScreen': { screen: ShipCaptainScreen },
    'ShipCrewScreen': { screen: ShipCrewScreen }
  },
  {
    initialRouteName: 'ShipCaptainScreen',
    // initialRouteName: 'ShipCaptainScreen',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
);

export default createAppContainer(AppNavigator);