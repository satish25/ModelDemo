/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import { AppRegistry } from 'react-native';
import App from './app/components/App';

import DetailsScreen from './app/components/Details';
import { StackNavigator } from 'react-navigation';


const SimpleApp = StackNavigator({
  App: { screen: App },
  DetailsScreen : {screen: DetailsScreen},
});

AppRegistry.registerComponent('ModelDemo', () => SimpleApp);
