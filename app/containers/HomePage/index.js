import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectUser, makeSelectLoading, makeSelectIsAuthenticated, makeSelectLocation } from 'containers/App/selectors';

import { Menu } from 'containers/Menu';
import saga from './saga';
import reducer from './reducer';

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
  }

  componentDidUpdate() {
    console.info('HomePage Did Update');
  }

  render() {
    const {
      isAuthenticated,
      loading,
      user,
      location,
      } = this.props;
    const userProps = {
      isAuthenticated,
      loading,
      user,
      location,
    };
    if (!userProps.isAuthenticated) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="content">
        <Menu menuItems={menuItems} location={location} />
        <h1>
          Welcome {userProps.user.name}
        </h1>
      </div>
    );
  }
}

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool,
  loading: PropTypes.bool,
  user: PropTypes.object,
  location: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  isAuthenticated: makeSelectIsAuthenticated(),
  loading: makeSelectLoading(),
  user: makeSelectUser(),
  location: makeSelectLocation(),
});

// function mapDispatchToProps(dispatch) {
//   return dispatch;
// }

const withConnect = connect(mapStateToProps);
const withReducer = injectReducer({ key: 'homePage', reducer });
const withSaga = injectSaga({ key: 'homePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
