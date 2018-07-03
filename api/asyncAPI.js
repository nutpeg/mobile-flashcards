import { AsyncStorage } from 'react-native';
import { KEY } from '../config/asyncStorageKeys';

const getDecks = async () => {
  try {
    const data = await AsyncStorage.getItem(KEY);
    if (data !== null) {
      return JSON.parse(data);
    }
  } catch (err) {
    console.log('Error retrieving decks from AsyncStorage: ', err);
  }
};

const getDeck = async id => {
  const decks = await getDecks();
  console.log('Deck with id: ', decks[id]);
  return decks[id];
};

const _saveAllDecks = async newDecks => {
  try {
    await AsyncStorage.setItem(KEY, JSON.stringify(newDecks));
  } catch (err) {
    console.log('Error saving deck to AsyncStorage: ', err);
  }
};

const saveDeckTitle = async title => {
  try {
    const decks = await getDecks();
    const newDecks = {
      ...decks,
      [title]: {
        title,
        questions: [],
      },
    };
    _saveAllDecks(newDecks);
  } catch (err) {
    console.log('Error saving deck to AsyncStorage: ', err);
  }
};

const addCardToDeck = async (title, card) => {
  try {
    const decks = await getDecks();
    let decksWithNewQuestion = {
      ...decks,
      [title]: {
        title,
        questions: [...decks[title].questions, card],
      },
    };
    _saveAllDecks(decksWithNewQuestion);
  } catch (err) {
    console.log('Error saving new question to deck', err);
  }
};

export default {
  getDecks,
  getDeck,
  saveDeckTitle,
  addCardToDeck,
};
