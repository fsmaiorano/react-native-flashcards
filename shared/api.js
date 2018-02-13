
import { AsyncStorage } from 'react-native'

const DECKS_KEY = 'Flashcards:432';

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
