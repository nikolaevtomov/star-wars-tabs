import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Stores } from 'app/stores'
import AppContainer from 'app/containers/app-container'
import StarWarsContainer from 'app/containers/star-wars-container'

const history = syncHistoryWithStore(browserHistory, Stores)

export default () => (
  <Provider store={Stores}>
    <Router history={history}>

      <Route path={'/'} component={AppContainer}>

        <IndexRoute component={StarWarsContainer} />
        <Route path={'/test'} component={StarWarsContainer} />

      </Route>

    </Router>
  </Provider>
)
