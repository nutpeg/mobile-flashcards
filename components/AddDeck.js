import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class AddDeck extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>AddDeck</Text>
      </View>
    );
  }
}

export default AddDeck;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 30,
  },
});
