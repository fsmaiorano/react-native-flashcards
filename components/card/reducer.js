export const cards = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_CARD':
            const { title, newCard } = action.data;
            let newState = { ...state }
            Object.keys(newState).map(key => {
                if (key === title) {
                    newState[key] = { ...newState[key], questions: [...newState[key].questions, ...[newCard]] }
                }
            })
            return newState;
        default:
            return state;
    }
}
