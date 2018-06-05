import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

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
        <Text
          style={styles.scoreText}
        >{`${correctTally} out of ${cardCount}`}</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Decks')}
          title="Back to Decks"
        />
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
  scoreText: {
    marginBottom: 40,
    marginTop: 20,
    fontSize: 20,
    paddingHorizontal: 20,
  },
});
