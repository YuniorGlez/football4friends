import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class MatchDetails extends Component {
  static navigationOptions = {
    title: 'MatchDetails'
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  goHome() {

    this.props.navigation.goBack();

  }

  render() {
    return (
      <View>
        <Text> Welcome to the MatchDetails page </Text>
        <Button title="Go back" onPress={() => this.goHome()} />
      </View>
    );
  }
}

export default MatchDetails;