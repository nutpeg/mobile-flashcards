import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import DecksListItem from './DecksListItem';
import { colors } from '../utils/colors';

const keyExtractor = ({ title }) => title;

export default class Decks extends Component {
  static navigationOptions = { title: 'Decks' };
  renderDeck = ({ item }) => {
    const { title, questions } = item;
    const navigate = this.props.navigation.navigate;
    const cardCount = questions ? questions.length : 0;
    return (
      <DecksListItem
        title={title}
        cardCount={cardCount}
        onPress={() => navigate('Deck', { deck: item, cardCount: cardCount })}
      />
    );
  };
  render() {
    const decks = this.props.screenProps.decks;
    return (
      <View style={styles.container}>
        <FlatList
          data={decks}
          keyExtractor={keyExtractor}
          renderItem={this.renderDeck}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
});
