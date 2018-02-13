
import * as api from '../../shared/api';

export const ADD_DECK = 'ADD_DECK';
export const GET_DECKS = 'GET_DECKS';

export const getDecks = () => {
  return dispatch => {
    return api.getDecks().then(result =>
      dispatch({
        type: GET_DECKS,
        data: result
      })
    )
  }
}

export const newDeck = (title, newDeck) => {
  return dispatch => {
    api.addDeck(title, newDeck).then((result) => {
      dispatch({
        type: ADD_DECK,
        data: { title, newDeck }
      })
    })
  }
}

