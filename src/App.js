import React, { useReducer } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AppContext } from "./store/store";

import Auth from "./pages/auth/Auth";
import DashboardRoutes from "./layouts/dashboard/DashboardRoutes";
import MatchingJobs from './pages/match/Match'

import { appReducer } from "./store/reducers";

import "./App.css";

function App() {
  const STORE = {
    user: null,
    loggedIn: false,
    matchingJobs: null,
    loading: false
  };
  const [store, dispatchStore] = useReducer(appReducer, STORE);
  return (
    <AppContext.Provider value={{store, dispatchStore}}>
      <div className="App">
        <Router>
          <Switch>
          
            <Route exact path="/">
              <Auth />
            </Route>
            <DashboardRoutes exact path="/match" component={MatchingJobs} />
          </Switch>
        </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App;
