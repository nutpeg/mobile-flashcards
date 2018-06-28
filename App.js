import React from 'react';
import { AsyncStorage } from 'react-native';
import AppNav from './components/routes';
import initialState from './utils/initialState';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

const key = '@MOBILE-FLASHCARDS';

export default class App extends React.Component {
  state = {};

  componentWillMount() {
    AsyncStorage.removeItem(key);
  }

  async componentDidMount() {
    try {
      let decks = await AsyncStorage.getItem(key);
      if (!decks) {
        console.log('No AsyncStorage data found.');
        // Uncomment the code below to load some fake data
        console.log('Loading fake data.');
        this.setState(initialState);
      } else {
        console.log('AsyncStorage data found. Loading...', decks);
        this.setState(JSON.parse(decks));
      }
    } catch (err) {
      console.log('error retrieving AsyncStorage item: ', err);
    }
  }

  getDecks = () => {
    return Object.values(this.state);
  };

  saveDeckTitle = title => {
    let newDecks = {
      ...this.state,
      [title]: { title },
    };
    this.setState(newDecks);
    AsyncStorage.setItem(key, JSON.stringify(newDecks))
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
    AsyncStorage.setItem(key, JSON.stringify(decksWithNewQuestion))
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
