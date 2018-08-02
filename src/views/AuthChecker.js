import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';

class AuthChecker extends Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('@static/imgs/loading.gif')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
export default AuthChecker;