/**
 *
 * Mail
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import MailEditor from 'components/MailEditor';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import makeSelectMail from './selectors';
import reducer from './reducer';
import saga from './saga';

import './Mail.scss';

export class Mail extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="mail container">
        <div className="mdc-layout-grid">
          <div className="mdc-layout-grid__inner mdc-layout-grid-remove-gutter">
            <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12 title">
              <h4>Send Email</h4>
            </div>
            <MailEditor />
          </div>
        </div>
      </div>
    );
  }
}

Mail.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  mail: makeSelectMail(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'mail', reducer });
const withSaga = injectSaga({ key: 'mail', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Mail);
