import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Score extends Component {
  render() {
    const {
      title,
      correctTally,
      cardCount,
    } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Text>{`Your score for the ${title} quiz:`}</Text>
        <Text>{`${correctTally} out of ${cardCount}`}</Text>
      </View>
    );
  }
}

export default Score;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
