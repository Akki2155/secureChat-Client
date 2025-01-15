import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import App from "./pages/dummy/dummy.jsx"

import './index.css'

import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from 'redux'
import reducers from './state/reducers/index.js'
import { thunk } from 'redux-thunk'


const store= createStore(reducers, applyMiddleware(thunk))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
