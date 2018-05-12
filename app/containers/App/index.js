import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { makeSelectIsAuthenticated } from 'containers/HomePage/selectors';
import HomePage from 'containers/HomePage/Loadable';
import Login from 'containers/Login/Loadable';
import Dashboard from 'containers/Dashboard/Loadable';
import Mail from 'containers/Mail/Loadable';
import Contacts from 'containers/Contacts/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import 'material-design-icons';
import './App.scss';

export class App extends React.PureComponent {
  render() {
    const { isAuthenticated } = this.props;

    if (!isAuthenticated) {
      return (<Login />);
    }

    return (
      <div className="content">
        <HomePage />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/mail" component={Mail} />
          <Route path="/contacts" component={Contacts} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  isAuthenticated: makeSelectIsAuthenticated(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withRouter,
  withConnect,
)(App);
