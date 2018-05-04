/**
 *
 * Menu
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import Logo from 'images/logo/shark-240.png';
import reducer from './reducer';
import saga from './saga';

import './MenuScript';


export class Menu extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { dispatch, location } = this.props; // eslint-disable-line no-unused-vars
    return (
      <nav className="mdc-drawer mdc-drawer--permanent">
        <div className="mdc-layout-grid">
          <div className="mcd-layout-grid__inner">
            <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12 center-text">
              <img src={Logo} alt="Mechalodons" width="100%" />
            </div>
          </div>
        </div>
        <div className="mdc-list-group">
          <nav className="mdc-list">
            <a className={'mdc-list-item caps nav-dashboard'} onClick={() => dispatch(push('/'))} role="link">
              <i className="material-icons mdc-list-item__graphic" aria-hidden="true">dashboard</i>dashboard
            </a>
            <a className={'mdc-list-item caps nav-mail'} onClick={() => dispatch(push('/mail'))} role="link">
              <i className="material-icons mdc-list-item__graphic" aria-hidden="true">mail</i>mail system
            </a>
          </nav>
          <hr className="mdc-list-divider" />
          <nav className="mdc-list">
            <a className={'mdc-list-item caps'} >
              <i className="material-icons mdc-list-item__graphic" aria-hidden="true">power_settings_new</i>logout
            </a>
          </nav>
        </div>
      </nav>
    );
  }
}

Menu.propTypes = {
  location: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
});

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'menu', reducer });
const withSaga = injectSaga({ key: 'menu', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Menu);
