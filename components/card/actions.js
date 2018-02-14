
import * as api from '../../shared/api';

export const ADD_CARD = 'ADD_CARD';

export const addCard = (title, newCard, decks) => {
    return dispatch => {
        api.addCard(title, newCard).then((result) => {
            dispatch({
                type: ADD_CARD,
                data: { title, newCard, decks}
            })
        })
    }
}