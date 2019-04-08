import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import rootReducer from './reducers/merge'
import Welcome from './components/welcome'

const store = createStore(rootReducer)
ReactDOM.render(<Provider store={store}><Welcome/></Provider>, document.getElementById('app'));