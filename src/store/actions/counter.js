export const incrementCounter = () => { //action creator
    return {
        type: 'INCREMENT'
    } //action
}

export const decrementCounter = () => {
    return {
        type: 'DECREMENT'
    }
}