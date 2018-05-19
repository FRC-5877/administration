/**
*
* Menu
*
*/

import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { push } from 'react-router-redux';
import Logo from '!file-loader?name=[name].[ext]!images/logo/shark-240.png';

import { logout } from 'containers/HomePage/actions';


function Menu(props) {
  const { user, dispatch } = props;
  return (
    <nav className="mdc-drawer mdc-drawer--permanent">
      <Helmet>
        <meta name="uid" content={user.googleId} />
      </Helmet>
      <div className="mdc-layout-grid">
        <div className="mcd-layout-grid__inner">
          <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12 center-text">
            <img src={Logo} alt="Mechalodons" width="100%" />
          </div>
          <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
            {user.name}
          </div>
        </div>
      </div>
      <div className="mdc-list-group">
        <nav className="mdc-list">
          <a className={'mdc-list-item caps nav-dashboard'} onClick={() => dispatch(push('/'))} role="link" tabIndex={0}>
            <i className="material-icons mdc-list-item__graphic" aria-hidden="true">dashboard</i>dashboard
          </a>
          <a className={'mdc-list-item caps nav-mail'} onClick={() => dispatch(push('/mail'))} role="link" tabIndex={0}>
            <i className="material-icons mdc-list-item__graphic" aria-hidden="true">mail</i>mail system
          </a>
        </nav>
        <hr className="mdc-list-divider" />
        <nav className="mdc-list">
          <a className={'mdc-list-item caps nav-contacts'} onClick={() => dispatch(push('/contacts'))} role="link" tabIndex={0}>
            <i className="material-icons mdc-list-item__graphic" aria-hidden="true">perm_contact_calendar</i>contacts and groups
          </a>
        </nav>
        <hr className="mdc-list-divider" />
        <nav className="mdc-list">
          <a className={'mdc-list-item caps'} role="link" onClick={() => dispatch(logout())} tabIndex={0}>
            <i className="material-icons mdc-list-item__graphic" aria-hidden="true">power_settings_new</i>logout
          </a>
        </nav>
      </div>
    </nav>
  );
}

Menu.propTypes = {
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

export default Menu;
