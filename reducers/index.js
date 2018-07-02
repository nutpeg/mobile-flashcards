import { RECEIVE_DECKS, ADD_DECK, ADD_CARD_TO_DECK } from '../actions';

export default function decksReducer(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks,
      };
    case ADD_DECK:
      return {
        ...state,
        [action.deck]: {
          title: action.deck,
          questions: [],
        },
      };
    case ADD_CARD_TO_DECK:
      return {
        ...state,
        [action.title]: {
          title: action.title,
          questions: [...state[action.title].questions, action.card],
        },
      };
    default:
      return state
  }
}
