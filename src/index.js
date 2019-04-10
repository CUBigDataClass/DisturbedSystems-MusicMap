import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import rootReducer from './store/merge'
import App from './MainAppPlugin/components/App'
import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import searchSaga  from './SearchPlugin/sagas/searchSaga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(searchSaga)

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('app'));