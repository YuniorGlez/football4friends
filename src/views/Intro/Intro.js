import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class Intro extends Component {
  static navigationOptions = {
    title: 'Intro'
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  signUp() {
    this.props.navigation.push('SignUp');
  }
  logIn() {
    this.props.navigation.push('LogIn');
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={styles.title}> Welcome to Football4Friends. </Text>
        <View style={styles.buttons}>

          <Button title="Create an Account" onPress={() => this.signUp()} />
          <Button title="I already have an account" onPress={() => this.logIn()} />
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

export default Intro;