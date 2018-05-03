import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectUser, makeSelectLoading, makeSelectIsAuthenticated } from 'containers/App/selectors';

import { Menu } from 'containers/Menu';
import { MailPage } from 'containers/MailPage';
import saga from './saga';
import reducer from './reducer';
import { changeLocation } from '../App/actions';

const menuItems = [
  {
    id: 0,
    name: 'dashboard',
    icon: 'dashboard',
    link: '/',
  },
  {
    id: 1,
    name: 'mail system',
    icon: 'mail',
    link: '/mail',
  },
  {
    id: 2,
    name: 'logout',
    icon: 'power_settings_new',
    link: '/logout',
  },
];

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    console.info('HomePage Did Mount');
    console.log(this.props);
  }

  componentDidUpdate() {
    console.info('HomePage Did Update');
  }

  render() {
    const {
      isAuthenticated,
      loading,
      user,
      } = this.props;

    const userProps = {
      isAuthenticated,
      loading,
      user,
    };

    if (!userProps.isAuthenticated) {
      return <Redirect to="/login" />;
    }

    if (this.props.location.pathname === '/') {
      return (
        <div className="content">
          <Menu menuItems={menuItems} location={location} />
        </div>
      );
    }

    if (this.props.location.pathname === '/mail') {
      return (
        <div className="content">
          <Menu menuItems={menuItems} location={location} />
          <MailPage />
        </div>
      );
    }

    return (
      <div className="content">
        <Menu menuItems={menuItems} location={location} />
        That page does not exist
      </div>
    );
  }
}

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool,
  loading: PropTypes.bool,
  user: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  isAuthenticated: makeSelectIsAuthenticated(),
  loading: makeSelectLoading(),
  user: makeSelectUser(),
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
