
import { AsyncStorage } from 'react-native'
import { initialState } from './initialState';

const DECKS_KEY = 'Flashcards:432';

export function addDeck(title, newDeck) {
  return AsyncStorage.getItem(DECKS_KEY)
    .then(results => {
      const decks = results ? JSON.parse(results) : initialState;
      const updatedDecks = { ...decks, ...{ [title]: newDeck } };

      return AsyncStorage.setItem(DECKS_KEY, JSON.stringify(updatedDecks));
    });
}