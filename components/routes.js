import React from 'react';
// import { Text, View } from 'react-native';
import { colors } from '../utils/colors';
import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import AddDeck from './AddDeck';
import Deck from './Deck';
import Decks from './Decks';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

const DecksNav = createStackNavigator({
  Decks: { screen: Decks },
  Deck: { screen: Deck },
});

export default createBottomTabNavigator(
  {
    Decks: {
      screen: DecksNav,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons name="cards" size={26} color={tintColor} />
        ),
      },
    },
    AddDeck: {
      screen: AddDeck,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <MaterialIcons name="add" size={26} color={tintColor} />
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
