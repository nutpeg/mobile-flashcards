import React from 'react';
import { AsyncStorage } from 'react-native';
import { colors } from './utils/colors';
import AppNav from './components/routes';

const key = '@MOBILE-FLASHCARDS';

export default class App extends React.Component {
  state = { decks: {} };

  async componentDidMount() {
    try {
      let decks = await AsyncStorage.getItem(key);
      if (!decks) {
        console.log('No AsyncStorage data found.');
        // Uncomment the code below to load some fake data
        // console.log('Loading fake data.');
        // this.setState({
        //   decks: {
        //     React: {
        //       title: 'React',
        //       questions: [
        //         {
        //           question: 'What is React?',
        //           answer: 'A library for managing user interfaces',
        //         },
        //         {
        //           question: 'Where do you make Ajax requests in React?',
        //           answer: 'The componentDidMount lifecycle event',
        //         },
        //       ],
        //     },
        //     JavaScript: {
        //       title: 'JavaScript',
        //       questions: [
        //         {
        //           question: 'What is a closure?',
        //           answer:
        //             'The combination of a function and the lexical environment within which that function was declared.',
        //         },
        //       ],
        //     },
        //   },
        // });
      } else {
        console.log('AsyncStorage data found. Loading...', decks);
        this.setState(JSON.parse(decks));
      }
    } catch (err) {
      console.log('error retrieving AsyncStorage item: ', err);
    }
  }

  getDecks = () => {
    return Object.values(this.state.decks);
  };

  saveDeckTitle = title => {
    let newDecks = {
      decks: {
        ...this.state.decks,
        [title]: { title },
      },
    };
    this.setState(newDecks);
    AsyncStorage.setItem(key, JSON.stringify(newDecks))
      .then(() => console.log('New deck stored to AsyncStorage'))
      .catch(err => console.log('error saving deck to AsyncStorage: ', err));
  };

  getDeck = id => {
    return this.state.decks[id];
  };

  // addCardToDeck = (title, card) => { };

  render() {
    return (
      <AppNav
        screenProps={{
          decks: this.getDecks(),
          getDeck: this.getDeck,
          saveDeckTitle: this.saveDeckTitle,
        }}
      />
    );
  }
}
