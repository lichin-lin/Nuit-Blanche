import React, { Component } from 'react'
import { Route } from 'react-router'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { history, store } from './history'

import Containers from './containers'

export default class Root extends Component {
  render () {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Route path="/" component={Containers.App}/>
        </ConnectedRouter>
      </Provider>
    )
  }
}
