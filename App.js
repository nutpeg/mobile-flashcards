import React from 'react';
import { colors } from './utils/colors';
import AppNav from './components/routes';

export default class App extends React.Component {
  state = {
    decks: {},
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
