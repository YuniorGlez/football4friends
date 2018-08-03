import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import Auth from '@services/Auth.service';
import UserForm from '@components/UserForm';

class SignUp extends Component {
  static navigationOptions = {
    title: 'SignUp'
  }

  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: '',
        alias: '',
        phone: ''
      }
    }
  }

  signUp() {
    Auth.createUser(this.state.user)
      .then(newUser => {
        this.props.navigation.navigate('AuthChecker');
      })
      .catch(err => alert(JSON.stringify(err)))
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <UserForm onChange={(user) => this.setState(user)} />
        <View style={styles.buttons}>
          <Button title="Enter" onPress={() => this.signUp()} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    marginTop: 30,
    textAlign: 'center',
    marginBottom: 30,
    flex: 3
  },
  buttons: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingBottom: 20,

  }
});

export default SignUp;