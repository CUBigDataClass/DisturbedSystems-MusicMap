import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import rootReducer from './reducers/merge'
import App from './components/App'
import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('app'));