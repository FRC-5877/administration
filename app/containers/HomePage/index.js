import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectIsAuthenticated, makeSelectHistory } from 'containers/App/selectors';

import { Menu } from 'containers/Menu';
import saga from './saga';
import reducer from './reducer';
import { makeSelectLocation } from '../App/selectors';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    const {
      isAuthenticated,
      location,
      } = this.props;

    if (!isAuthenticated) {
      return <Redirect to="/login" />;
    }

    return (
      <Menu location={location} dispatch={this.props.dispatch} />
    );
  }
}

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool,
  location: PropTypes.object,
  dispatch: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  isAuthenticated: makeSelectIsAuthenticated(),
  history: makeSelectHistory(),
  location: makeSelectLocation(),
});

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'homePage', reducer });
const withSaga = injectSaga({ key: 'homePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
