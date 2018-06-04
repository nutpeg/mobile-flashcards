import React from 'react';
import { colors } from './utils/colors';
import AppNav from './components/routes';

export default class App extends React.Component {
  state = {
    decks: {
      React: {
        title: 'React',
        questions: [
          {
            question: 'What is React?',
            answer: 'A library for managing user interfaces',
          },
          {
            question: 'Where do you make Ajax requests in React?',
            answer: 'The componentDidMount lifecycle event',
          },
        ],
      },
      JavaScript: {
        title: 'JavaScript',
        questions: [
          {
            question: 'What is a closure?',
            answer:
              'The combination of a function and the lexical environment within which that function was declared.',
          },
        ],
      },
    },
  };

  getDecks = () => {
    return Object.values(this.state.decks);
  };

  saveDeckTitle = title => {
    this.setState({
      decks: {
        ...this.state.decks,
        [title]: { title },
      },
    });
  };

  // getDeck = (id) => { };

  // addCardToDeck = (title, card) => { };

  render() {
    return (
      <AppNav
        screenProps={{
          decks: this.getDecks(),
          saveDeckTitle: this.saveDeckTitle,
        }}
      />
    );
  }
}
