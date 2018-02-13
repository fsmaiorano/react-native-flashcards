
export const decks = (state = {}, action) => {
    switch (action.type) {
      case 'ADD_DECK':
        return Object.assign({}, state, { [action.data.title]: action.data.newDeck });
      default:
        return state;
    }
  }
  