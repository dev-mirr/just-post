import React from 'react'
import { render } from 'react-dom'
import { compose } from 'redux'
import { Provider } from 'react-redux'
import { App } from '@/components/App'
import { rootReducer, rootSaga } from '@/modules'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { Router } from 'react-router-dom'
import * as api from '@/api'
import history from '@/utils/historyUtils'

const sagaMiddleware = createSagaMiddleware()

const { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ } = window as any
const composeEnhancers =
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ !== undefined
    ? __REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootSaga)

api.init()

render(
  <Provider store={store}>
    <Router history={history}>
        <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
)
