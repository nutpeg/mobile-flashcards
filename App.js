import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import AddDeck from './components/AddDeck';
import Deck from './components/Deck';
import Decks from './components/Decks';
import { colors } from './utils/colors';

const DecksNav = createStackNavigator({
  Decks: { screen: Decks },
  Deck: { screen: Deck },
});

const Tabs = createBottomTabNavigator({
  Decks: { screen: Decks },
  AddDeck: { screen: AddDeck },
});

export default class App extends React.Component {
  state = {
    decks: [],
  };

  render() {
    return <Tabs />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
