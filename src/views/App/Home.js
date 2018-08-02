import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Home extends Component {
  static navigationOptions = {
    title: 'Home'
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  goMatchInfoView() {

    this.props.navigation.push('Match');

  }

  render() {
    return (
      <View>
        <Text> Welcome to the Home page </Text>
        <Button title="Go to match details" onPress={() => this.goMatchInfoView()} />
      </View>
    );
  }
}

export default Home;