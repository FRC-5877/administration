/**
 *
 * Contacts
 *
 */
/* eslint no-underscore-dangle: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import $ from 'jquery';
import { MDCTextField } from '@material/textfield';
import { MDCDialog } from '@material/dialog';
import { MDCChipSet } from '@material/chips';

import ContactList from 'components/ContactList';
import GroupList from 'components/GroupList';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import { makeSelectContactList, makeSelectGroupList } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { addContact, addGroup, editContact } from './actions';

import './Contacts.scss';

export class Contacts extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    const { addAContact, addAGroup, editAContact } = this.props;
    const allTextFields = $('.mdc-text-field');
    const addContactDialog = MDCDialog.attachTo(document.querySelector('#add-contact-dialog'));
    const editContactDialog = MDCDialog.attachTo(document.querySelector('#edit-contact-dialog'));
    const addGroupDialog = MDCDialog.attachTo(document.querySelector('#add-group-dialog'));
    const addContactChipSet = MDCChipSet.attachTo(document.querySelector('#add-contact-dialog .mdc-chip-set'));
    const editContactChipSet = MDCChipSet.attachTo(document.querySelector('#edit-contact-dialog .mdc-chip-set'));

    allTextFields.each((index, field) => {
      MDCTextField.attachTo(field);
    });

    // On Click Add Contact
    $('.add-contact').click(() => {
      addContactDialog.show();
    });

    // On Click Add Group
    $('.add-group').click(() => {
      addGroupDialog.show();
    });

    // On Click Contact
    $('.mdc-list-item.contact').click((e) => {
      $('.editing').removeClass('.editing');
      const id = $(e.target).attr('data-id');
      const name = $(e.target).attr('data-name');
      const email = $(e.target).attr('data-email');
      // const group = $(e.target).attr('data-group');

      editContactChipSet.chips.forEach((chip) => {
        chip.foundation.setSelected(false);
      });

      $('#edit-contact-dialog .id').val(id);
      $('#edit-contact-dialog .name').val(name);
      $('#edit-contact-dialog .email').val(email);
      $(e.target).addClass('editing');
      // editSelectField.getDefaultFoundation().setValue(group);
      editContactDialog.show();
    });

    // Add Contact
    $('#add-contact-dialog').on('MDCDialog:accept', () => {
      const g = [];

      addContactChipSet.chips.forEach((chip) => {
        if (chip.isSelected()) {
          g.push($(chip.root_).data('id'));
        }
      });

      addAContact({
        name: $('#add-contact-dialog input#name').val(),
        parent: $('#add-contact-dialog input#parent').is(':checked'),
        email: $('#add-contact-dialog input#email').val(),
        groups: g,
      });
    });

    // Add Group
    $('#add-group-dialog').on('MDCDialog:accept', () => {
      addAGroup({
        name: $('#add-group-dialog input#name').val(),
        color: $('#add-group-dialog input#color').val(),
      });
    });

    // Edit Contact
    $('#edit-contact-dialog').on('MDCDialog:accept', () => {
      const g = [];

      editContactChipSet.chips.forEach((chip) => {
        if (chip.isSelected()) {
          g.push($(chip.root_).data('id'));
        }
      });
      editAContact({
        _id: $('#edit-contact-dialog div.id').val(),
        name: $('#edit-contact-dialog input#name').val(),
        parent: $('#edit-contact-dialog input#parent').is(':checked'),
        email: $('#edit-contact-dialog input#email').val(),
        groups: g,
      });
    });
  }

  render() {
    const { contacts, groups } = this.props;

    return (
      <div className="contacts container">
        <div className="mdc-layout-grid">
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell--span-10">
              <ContactList contacts={contacts} groups={groups} />
            </div>
            <div className="mdc-layout-grid__cell--span-2">
              <GroupList groups={groups} />
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
  addAContact: PropTypes.func,
  addAGroup: PropTypes.func,
  editAContact: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  contacts: makeSelectContactList(),
  groups: makeSelectGroupList(),
});

function mapDispatchToProps(dispatch) {
  return {
    addAContact: (contact) => dispatch(addContact(contact)),
    addAGroup: (group) => dispatch(addGroup(group)),
    editAContact: (contact) => dispatch(editContact(contact)),
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
