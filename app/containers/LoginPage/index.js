/**
 *
 * LoginPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Redirect } from 'react-router-dom';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { GoogleLogin } from 'react-google-login';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { loginRequest, loginSuccess } from '../App/actions';
import { } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { makeSelectIsAuthenticated, makeSelectLoading } from '../App/selectors';
import LoadingIndicator from '../../components/LoadingIndicator';
// import { makeSelectLoading } from '../App/selectors';
// import messages from './messages';

export class LoginPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    console.info('Login Did Mount');
    console.info(`Login Props: ${JSON.stringify(this.props)}`);
  }

  componentDidUpdate() {
    console.info('Login Did Update');
  }

  render() {
    const {
      loading,
      isAuthenticated,
      } = this.props;
    const userProps = {
      loading,
      isAuthenticated,
    };
    console.log(`LoginPage: userProps: ${JSON.stringify(userProps)}`);
    if (userProps.isAuthenticated) {
      return (
        <Redirect to="/" />
      );
    }
    if (userProps.loading) {
      return (
        <LoadingIndicator />
      );
    }
    return (
      <div>
        <Helmet>
          <title>Login</title>
          <meta name="description" content="Login for Administration" />
        </Helmet>
        <GoogleLogin clientId={'836592318780-ds8foim0jqo71iippfi4ir44lc61bpb3.apps.googleusercontent.com'} onRequest={this.props.onLoginRequest} onSuccess={this.props.onLoginSuccess} />
        {/* <FormattedMessage {...messages.header} /> */}
      </div>
    );
  }
}

LoginPage.propTypes = {
  loading: PropTypes.bool,
  isAuthenticated: PropTypes.bool,
  onLoginRequest: PropTypes.func,
  onLoginSuccess: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  isAuthenticated: makeSelectIsAuthenticated(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoginRequest: () => dispatch(loginRequest()),
    onLoginSuccess: (response) => dispatch(loginSuccess(response.profileObj)),
  };
  // return dispatch;
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'loginPage', reducer });
const withSaga = injectSaga({ key: 'loginPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LoginPage);
