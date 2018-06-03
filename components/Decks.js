import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Decks extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.screenProps.decks.map(deck => <Text>Hello</Text>)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
