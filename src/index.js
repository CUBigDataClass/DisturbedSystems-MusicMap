import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import rootReducer from './reducers/merge'

const store = createStore(rootReducer)
ReactDOM.render(<Provider store={store}><Welcome/></Provider>, document.getElementById('app'));