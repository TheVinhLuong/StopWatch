/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import store from "./app/config/store";
import Navigator from "./app/config/routes";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import EStyleSheet from "react-native-extended-stylesheet";
import StackNavigator from './app/config/routes';

export default () => {
  console.log("wtf", JSON.stringify(store))

  return <Provider store={store}>
      <StackNavigator onNavigationStateChange={null} />
  </Provider>
};
