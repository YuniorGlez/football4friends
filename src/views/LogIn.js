import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';

class LogIn extends Component {
  static navigationOptions = {
    title: 'LogIn'
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.buttons}>
          <Button title="Enter" onPress={() => this.props.navigation.navigate('Home')} />
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

export default LogIn;