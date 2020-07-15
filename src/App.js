import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Auth from './pages/auth'
import DashboardRoutes from './layouts/dashboard/DashboardRoutes'

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/auth">
            <Auth/>
          </Route>
          <DashboardRoutes exact path="/dashboard" component={Auth} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
