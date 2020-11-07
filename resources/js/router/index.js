import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from '../pages/welcome';
import NotFound from '../pages/404';
import Home from '../pages/home';
import AuthRoute from './auth-route';
import GuestRoute from './guest-route';
import { useAuth } from '../context/auth';
import FullPageSpinner from '../components/full-page-spinner';

function App () {
  let { initializing } = useAuth();
  return (
    initializing
      ? <FullPageSpinner />
      : <Router>
        <div className="flex flex-col min-h-screen">
          <Switch>
            <GuestRoute exact path="/" component={Welcome} title="welcome" />
            <AuthRoute path="/home" component={Home} title="home"/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </Router>
  );
};

export default App;
