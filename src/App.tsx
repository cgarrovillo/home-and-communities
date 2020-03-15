import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from './components/Landing'
import Communities from './components/Communities'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/communities">
          <Communities />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
