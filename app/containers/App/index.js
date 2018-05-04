/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import Dashboard from 'containers/Dashboard/Loadable';
import MailPage from 'containers/MailPage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Logout from 'components/Logout';
import './App.scss';

export default function App() {
  return (
    <div className="content">
      <HomePage />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/mail" component={MailPage} />

        <Route path="/login" component={LoginPage} />
        <Route path="/logout" component={Logout} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
