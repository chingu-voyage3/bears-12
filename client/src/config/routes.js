import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import App from '../App'
import HomeContainer from '../container/HomeContainer';

const getRoutes = (store) => (
  <Router>
    <App>
      <Switch>
        <Route exact={true} path='/' component={HomeContainer} />
        <Route render={() => <Redirect to='/' />} />
      </Switch>
    </App>
  </Router>
)

export default getRoutes
