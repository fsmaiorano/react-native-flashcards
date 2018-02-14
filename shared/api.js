
import { AsyncStorage } from 'react-native'
import {DECKS_KEY} from './constants';

export function addDeck(title, newDeck) {
  return AsyncStorage.getItem(DECKS_KEY)
    .then(results => {
      const decks = JSON.parse(results);
      const updatedDecks = { ...decks, ...{ [title]: newDeck } };

      return AsyncStorage.setItem(DECKS_KEY, JSON.stringify(updatedDecks));
    });
}

export function addCard(title, card) {
  return AsyncStorage.getItem(DECKS_KEY)
    .then(results => {
      const decks = JSON.parse(results);
      const updatedDecks = {
        ...decks,
        [title]: {
          ...decks[title],
          "questions": [...decks[title].questions, ...[card]]
        }
      };
      return AsyncStorage.setItem(DECKS_KEY, JSON.stringify(updatedDecks));
    });
}

export function getDecks() {
  return AsyncStorage.getItem(DECKS_KEY)
    .then(results => JSON.parse(results));
}

export function reset() {
  return AsyncStorage.clear(DECKS_KEY);
}
