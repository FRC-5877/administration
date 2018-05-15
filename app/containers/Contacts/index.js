/**
 *
 * Contacts
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { makeSelectUserId } from 'containers/HomePage/selectors';

import ContactList from 'components/ContactList';
import GroupList from 'components/GroupList';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import { makeSelectContactList, makeSelectGroupList } from './selectors';
import reducer from './reducer';
import saga from './saga';

import './Contacts.scss';

export class Contacts extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { contacts, uid, groups } = this.props;

    return (
      <div className="contacts container">
        <div className="user hidden" data-uid={uid} />
        <div className="mdc-layout-grid">
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell">
              <ContactList uid={uid} contacts={contacts} />
            </div>
            <div className="mdc-layout-grid__cell">
              <GroupList uid={uid} groups={groups} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
  groups: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
  uid: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  contacts: makeSelectContactList(),
  groups: makeSelectGroupList(),
  uid: makeSelectUserId(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'contacts', reducer });
const withSaga = injectSaga({ key: 'contacts', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Contacts);
