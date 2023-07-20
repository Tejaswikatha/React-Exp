import { combineReducers } from 'redux';
import {counterReducer} from './counter';
import {productsReducer} from './products'

export const mainReducer = combineReducers({
    counterReducer,
    productsReducer
})