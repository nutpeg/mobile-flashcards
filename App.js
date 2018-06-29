import React from 'react';
import { AsyncStorage } from 'react-native';
import AppNav from './config/routes';
import initialState from './utils/initialState';
import store from './config/store';
import { Provider } from 'react-redux';
import { KEY } from './utils/asyncStorageKey';
import { fetchDecks } from './actions';

export default class App extends React.Component {
  state = {};

  componentWillMount() {
    AsyncStorage.removeItem(KEY);
  }
  
  // async componentDidMount() {
  //   try {
  //     let decks = await AsyncStorage.getItem(KEY);
  //     if (!decks) {
  //       console.log('No AsyncStorage data found.');
  //       // Uncomment the code below to load some fake data
  //       console.log('Loading fake data.');
  //       this.setState(initialState);
  //     } else {
  //       console.log('AsyncStorage data found. Loading...', decks);
  //       this.setState(JSON.parse(decks));
  //     }
  //   } catch (err) {
  //     console.log('error retrieving AsyncStorage item: ', err);
  //   }
  // }

  getDecks = () => {
    return Object.values(this.state);
  };

  saveDeckTitle = title => {
    let newDecks = {
      ...this.state,
      [title]: { title },
    };
    this.setState(newDecks);
    AsyncStorage.setItem(KEY, JSON.stringify(newDecks))
      .then(() => console.log('New deck stored to AsyncStorage'))
      .catch(err => console.log('error saving deck to AsyncStorage: ', err));
  };

  getDeck = id => {
    return this.state[id];
  };

  addCardToDeck = (title, card) => {
    // find the deck
    // add the card to its questions array
    let questions = this.state[title].questions || [];
    let decksWithNewQuestion = {
      decks: {
        ...this.state,
        [title]: { title, questions: [...questions, card] },
      },
    };
    this.setState(decksWithNewQuestion);
    AsyncStorage.setItem(KEY, JSON.stringify(decksWithNewQuestion))
      .then(() =>
        console.log(`New question stored to AsyncStorage for deck ${title}`),
      )
      .catch(err => console.log('error saving deck to AsyncStorage: ', err));
  };

  render() {
    return (
      <Provider store={store}>
        <AppNav
          screenProps={{
            decks: this.getDecks(),
            getDeck: this.getDeck,
            addCardToDeck: this.addCardToDeck,
            saveDeckTitle: this.saveDeckTitle,
          }}
        />
      </Provider>
    );
  }
}
