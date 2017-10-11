import React from 'react'
import { Provider } from 'react-redux'
import { Map } from 'immutable' // eslint-disable-line
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import { Stores } from 'app/stores'
import AppContainer from 'app/containers/app-container'
import MainContainer from 'app/containers/main-container'

const history = syncHistoryWithStore(browserHistory, Stores, {
  selectLocationState (state) {
    return state.get('routing')
  }
})

export default () => (
  <Provider store={Stores}>
    <Router history={history}>

      <Route path={'/'} component={AppContainer}>

        <IndexRoute component={MainContainer} />
        <Route path={'/test'} component={MainContainer} />

      </Route>

    </Router>
  </Provider>
)
