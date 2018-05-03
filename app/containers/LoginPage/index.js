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
import $ from 'jquery';
import { MDCLinearProgress } from '@material/linear-progress';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { loginRequest, loginSuccess } from '../App/actions';
import { } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { makeSelectIsAuthenticated, makeSelectLoading } from '../App/selectors';
import LoadingIndicator from '../../components/LoadingIndicator';
import './Login.scss';
// import { makeSelectLoading } from '../App/selectors';
// import messages from './messages';

export class LoginPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
  }

  componentDidUpdate() {
    $(document).ready(() => {
      const determinate = $('.mdc-linear-progress');
      MDCLinearProgress.determinate = determinate;
      MDCLinearProgress.progress = 0.5;
      if (determinate.data('buffer')) {
        MDCLinearProgress.buffer = 0.75;
      }
    });
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
        <div className={'mdc-layout-grid mdc-grid-remove-gutter-margin full-height center-text'}>
          <div className={'mdc-layout-grid__inner full-height'}>
            <div className={'mdc-layout-grid__cell mdc-layout-grid__cell--span-5'} />
            <div className={'mdc-layout-grid__cell mdc-layout-grid__cell--span-2 mdc-layout-grid__cell--align-middle mdc-elevation--z1'}>
              <div className={'mdc-layout-grid'}>
                <div className={'mdc-layout-grid__inner'}>
                  <div className={'mdc-layout-grid__cell mdc-layout-grid__cell--span-12'}>
                    <h4 className={'mdc-typography--headline4'}>Mechalodons Administration</h4>
                  </div>
                  <div className={'mdc-layout-grid__cell mdc-layout-grid__cell--span-12'}>
                    <GoogleLogin clientId={'836592318780-ds8foim0jqo71iippfi4ir44lc61bpb3.apps.googleusercontent.com'} onRequest={this.props.onLoginRequest} onSuccess={this.props.onLoginSuccess} className={'mdc-button mdc-button--raised google-button'} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
