import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Auth from '@services/Auth.service';

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
    return Auth.checkLogged()
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