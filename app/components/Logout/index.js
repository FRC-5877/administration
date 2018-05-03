/**
*
* Logout
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { logout } from 'containers/App/actions';
// import styled from 'styled-components';


class Logout extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    console.log('Logout Will Mount');
    this.props.dispatch(logout());
  }

  render() {
    return (
      <Redirect to="/" />
    );
  }
}

Logout.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(Logout);
