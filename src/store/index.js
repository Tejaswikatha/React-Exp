import { configureStore } from '@reduxjs/toolkit'
import { mainReducer } from './reducers'
import thunk from 'redux-thunk'

export default configureStore({
    reducer: mainReducer,
    middleware: [thunk]
  })

