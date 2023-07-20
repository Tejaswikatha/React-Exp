import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyCounter from './components/counter/Counter'
import { Provider } from 'react-redux'
import store from './store'

function App() {

  return (
    <Provider store={store}>
      <MyCounter/>
    </Provider>
  )
}

export default App
