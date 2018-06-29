import { RECEIVE_DECKS, ADD_DECK } from '../actions';

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
        ...action.deck,
      };
    // case ADD_CARD_TO_DECK:
    //   return {
    //     ...state,
    //     [action.title]: {
    //       title: ...state,
    //       questions: [

    //       ]
    //     }
    //   }
    default:
      return state;
  }
}
