const initialState = {
    count: 0
}

//reducer is a pure function which returns a new state depends on the action type

export const counterReducer = (state = initialState, action) => { //reducer pure function
    switch(action.type) {
        case 'INCREMENT': return {count: state.count + 1}
        case 'DECREMENT': return {count: state.count - 1}
        default: return state
    }
}