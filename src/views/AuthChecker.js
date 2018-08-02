import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';

class AuthChecker extends Component {
  static navigationOptions = {
    header: null
  }

  componentWillMount() {
    this.checkUserLogged()
      .then(user => {
        if (!user) {
          this.props.navigation.navigate('AuthRouter');
        } else {
          this.props.navigation.navigate('AppRouter');
        }
      })
  }

  checkUserLogged() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // resolve({ username: 'fake' });
        resolve(null);
      }, 1000);
    })
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