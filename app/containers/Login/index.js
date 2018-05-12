/**
 *
 * Login
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { GoogleLogin } from 'react-google-login';

import { loginFailure, loginSuccess, loginRequest } from 'containers/HomePage/actions';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import makeSelectLogin from './selectors';
import reducer from './reducer';
import saga from './saga';

import './Login.scss';

export class Login extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { onFailure, onSuccess, onRequest } = this.props;

    return (
      <div className={'mdc-layout-grid mdc-layout-grid-remove-gutter-margin full-height center-text'}>
        <div className={'mdc-layout-grid__inner full-height'}>
          <div className={'mdc-layout-grid__cell mdc-layout-grid__cell--span-5'} />
          <div className={'mdc-layout-grid__cell mdc-layout-grid__cell--span-2 mdc-layout-grid__cell--align-middle mdc-elevation--z1'}>
            <div className={'mdc-layout-grid'}>
              <div className={'mdc-layout-grid__inner'}>
                <div className={'mdc-layout-grid__cell mdc-layout-grid__cell--span-12'}>
                  <h4 className={'mdc-typography--headline4'}>Mechalodons Administration</h4>
                </div>
                <div className={'mdc-layout-grid__cell mdc-layout-grid__cell--span-12'}>
                  <GoogleLogin clientId={'836592318780-ds8foim0jqo71iippfi4ir44lc61bpb3.apps.googleusercontent.com'} onRequest={onRequest} onSuccess={onSuccess} onFailure={onFailure} className={'mdc-button mdc-button--raised google-button'} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  onRequest: PropTypes.func.isRequired,
  onFailure: PropTypes.func.isRequired,
  onSuccess: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
});

function mapDispatchToProps(dispatch) {
  return {
    onFailure: (e) => dispatch(loginFailure(e)),
    onSuccess: (user) => dispatch(loginSuccess(user)),
    onRequest: () => dispatch(loginRequest()),
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'login', reducer });
const withSaga = injectSaga({ key: 'login', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Login);
