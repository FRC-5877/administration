/**
 *
 * MailPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectMailPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export class MailPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>MailPage</title>
          <meta name="description" content="Description of MailPage" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

MailPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  mailpage: makeSelectMailPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'mailPage', reducer });
const withSaga = injectSaga({ key: 'mailPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(MailPage);
