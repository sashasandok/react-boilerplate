// react
import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import importedComponent from 'react-imported-component'

// components
import Home from './Home/Home'
import Login from './Login/Login'

const AsyncNoMatch = importedComponent(() => import('./NoMatch/NoMatch'))

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route component={AsyncNoMatch} />
      </Switch>
    </div>
  </Router>
)

export default App
