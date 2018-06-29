import { AsyncStorage } from 'react-native';
import { KEY } from '../utils/asyncStorageKey';

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK';

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  };
}

export function fetchDecks() {
  return dispatch => {
      AsyncStorage.getItem(KEY).then(resp => {
        console.log('AsyncStorage data found. Loading...', decks);
        dispatch(receiveDecks(JSON.parse(resp)));
      }).catch(err => {
      console.log('error retrieving AsyncStorage item: ', err);
    })
  };
}

export function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck,
  };
}

export function addCardToDeck(card, deckTitle) {
  return {
    type: ADD_CARD_TO_DECK,
    card,
    deckTitle,
  };
}
