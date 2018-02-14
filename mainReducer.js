import { combineReducers } from 'redux';
import { decks } from './components/deck/reducer';
import { cards } from './components/card/reducer';

export default combineReducers({
    decks,
    cards
})
