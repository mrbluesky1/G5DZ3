
const initialState = {
    number: 0
}

export function reducer(state = initialState, action) {
    if (action.type === "NUMBER_PLUS") {
        return {...state, number: state.number + 1}
    }
    else if (action.type === "NUMBER_MINUS" && state.number > 0) {
        return {...state, number: state.number - 1}
    }
    return state
}