
import React, { Component } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import Home from '@views/Home';
import { createStackNavigator } from 'react-navigation';

const Router = createStackNavigator({
  Home
}, {
    initialRouteName: 'Home'
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
