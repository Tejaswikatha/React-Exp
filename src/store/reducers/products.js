export const productsReducer = (state = {products: []}, action) => {
    switch(action.type) {
        case 'PRODUCTS_SUCCESS': return {...state, products: action.payload}
        default: return state
    }
}