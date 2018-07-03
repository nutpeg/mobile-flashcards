import API from '../api/asyncAPI';
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
    API.getDecks()
      .then(resp => {
        console.log('AsyncStorage data found. Loading...', resp);
        dispatch(receiveDecks(resp));
      })
      .catch(err => {
        console.log('error retrieving AsyncStorage item: ', err);
      });
  };
}

export function addDeckSucceed(deck) {
  return {
    type: ADD_DECK,
    deck,
  };
}

export function addDeck(deckTitle) {
  return dispatch => {
    dispatch(addDeckSucceed(deckTitle));
    API.saveDeckTitle(deckTitle);
  };
}

export function addCardToDeckSucceed(title, card) {
  return {
    type: ADD_CARD_TO_DECK,
    title,
    card,
  };
}

export function addCardToDeck(title, card) {
  return dispatch => {
    dispatch(addCardToDeckSucceed(title, card));
    API.addCardToDeck(title, card);
  };
}
