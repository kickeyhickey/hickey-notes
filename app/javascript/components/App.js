import React, { Component } from 'react'
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'

import Navigation from './components/Navigation'
import Home from './pages/Home'

class App extends Component {
  render() {
    return(
    <>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </>
    )
  }
}

export default App