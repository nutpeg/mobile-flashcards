import React from 'react';
import { colors } from '../utils/colors';
import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import AddDeck from '../components/AddDeck';
import Deck from '../components/Deck';
import Decks from '../components/Decks';
import Quiz from '../components/Quiz';
import Score from '../components/Score';
import Answer from '../components/Answer';
import AddCard from '../components/AddCard';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

const AnswerModal = createStackNavigator(
  {
    Answer: {
      screen: Answer,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);

const DecksTabNav = createBottomTabNavigator(
  {
    Decks: {
      screen: Decks,
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
        tabBarLabel: 'Add Deck',
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

DecksTabNav.navigationOptions = ({ navigation }) => {
  let { routeName } = navigation.state.routes[navigation.state.index];
  let title;
  if (routeName === 'Decks') {
    title = 'Decks';
  } else if (routeName === 'AddDeck') {
    title = 'Add Deck';
  }
  return {
    title,
  };
};

export default createStackNavigator(
  {
    Root: { screen: DecksTabNav },
    Deck: { screen: Deck },
    AddCard: { screen: AddCard },
    Quiz: { screen: Quiz },
    AnswerModal: { screen: AnswerModal },
    Score: { screen: Score },
  },
);
