
import React, { Component } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import SignUp from '@views/SignUp';
import LogIn from '@views/LogIn';
import Intro from '@views/Intro';
import Home from '@views/Home';
import Match from '@views/MatchDetails';

import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

const AuthRouter = createStackNavigator({
  Intro,
  LogIn,
  SignUp,
}, {
    initialRouteName: 'Intro'
  });
const AppRouter = createStackNavigator({
  Home,
  Match
}, {
    initialRouteName: 'Home'
  });

const SwitchRouter = createSwitchNavigator({ AuthRouter, AppRouter }, { initialRouteName: 'AuthRouter' });

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SwitchRouter />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
