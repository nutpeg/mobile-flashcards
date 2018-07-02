import React from 'react';
import { AsyncStorage } from 'react-native';
import AppNav from './config/routes';
import initialState from './utils/initialState';
import store from './config/store';
import { Provider } from 'react-redux';
import { KEY } from './config/asyncStorageKey';
import { fetchDecks } from './actions';

export default class App extends React.Component {
  state = {};

  componentWillMount() {
    AsyncStorage.removeItem(KEY);
  }

  // getDecks = () => {
  //   return Object.values(this.state);
  // };

  // getDeck = id => {
  //   return this.state[id];
  // };

  // addCardToDeck = (title, card) => {
  //   // find the deck
  //   // add the card to its questions array
  //   console.log('title is: ', title)
  //   let questions = this.state[title].questions || [];
  //   let decksWithNewQuestion = {
  //     ...this.state,
  //     [title]: { title, questions: [...questions, card] },
  //   };
  //   this.setState(decksWithNewQuestion);
  //   AsyncStorage.setItem(KEY, JSON.stringify(decksWithNewQuestion))
  //     .then(() =>
  //       console.log(`New question stored to AsyncStorage for deck ${title}`),
  //     )
  //     .catch(err => console.log('error saving deck to AsyncStorage: ', err));
  // };

  render() {
    return (
      <Provider store={store}>
        <AppNav
          screenProps={{
            // decks: this.getDecks(),
            // getDeck: this.getDeck,
            // addCardToDeck: this.addCardToDeck,
          }}
        />
      </Provider>
    );
  }
}
