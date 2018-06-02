import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import AddDeck from './components/AddDeck';
import Deck from './components/Deck';
import Decks from './components/Decks';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { colors } from './utils/colors';
import fakeData from './utils/fakeData';

const DecksNav = createStackNavigator({
  Decks: { screen: Decks },
  Deck: { screen: Deck },
});

const Tabs = createBottomTabNavigator(
  {
    Decks: {
      screen: Decks,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons name="cards" size={30} color={tintColor} />
        ),
      },
    },
    AddDeck: {
      screen: AddDeck,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <MaterialIcons name="add" size={30} color={tintColor} />
        ),
      },
    },
  },
  {
    initialRouteName: 'Decks',
    tabBarPosition: 'bottom',
    tabBarOptions: {
      style: {
        backgroundColor: colors.greyLight,
      },
      showLabel: true,
      showIcon: true,
      activeTintColor: colors.blue,
      inactiveTintColor: colors.greyDark,
      renderIndicator: () => null,
    },
  },
);

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
