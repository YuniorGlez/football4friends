
import React, { Component } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import SignUp from '@views/SignUp';
import LogIn from '@views/LogIn';
import Intro from '@views/Intro';
import Home from '@views/Home';
import Match from '@views/MatchDetails';
import { createStackNavigator } from 'react-navigation';

const Router = createStackNavigator({
  Intro,
  LogIn,
  SignUp,
  Home,
  Match
}, {
    initialRouteName: 'Intro'
  });

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Router />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
