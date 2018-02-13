
import { AsyncStorage } from 'react-native'

const DECKS_KEY = 'Flashcards:432';

export function addDeck(title, newDeck) {
  return AsyncStorage.getItem(DECKS_KEY)
    .then(results => {
      const decks = results ? JSON.parse(results) : initialState;
      const updatedDecks = { ...decks, ...{ [title]: newDeck } };

      return AsyncStorage.setItem(DECKS_KEY, JSON.stringify(updatedDecks));
    });
}

export const initialState = {
  'React': {
      title: 'React',
      questions: [
          {
              question: 'React is based on imperative programming',
              answer: false,
          },
          {
              question: 'React can render on client-side and server-side',
              answer: true,
          },
          {
              question: 'React was started by the developers at Twitter',
              answer: false,
          },
      ],
  },
  'Udacity': {
      title: 'Udacity',
      questions: [
          {
              question: 'Udacity is based in California',
              answer: true,
          },
          {
              question: 'Udacity does not offer free courses',
              answer: false,
          },
          {
              question: 'Udacity is awesome',
              answer: true,
          },
      ],
  },
};
