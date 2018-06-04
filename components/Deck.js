import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';

export default class Deck extends Component {
  static navigationOptions = { title: 'Deck' };
  render() {
    const {
      deck: { title, questions },
      cardCount,
    } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.cardCount}>{`${cardCount} cards`}</Text>
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
  title: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 26,
    marginBottom: 20,
  },
  cardCount: {
    color: colors.greyDark,
    fontSize: 16,
    marginBottom: 20,
  },
});
