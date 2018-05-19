/* eslint no-underscore-dangle: 0 */
import $ from 'jquery';
import { MDCDialog } from '@material/dialog';
import { MDCTextField } from '@material/textfield';
import { MDCCheckbox } from '@material/checkbox';
import { MDCFormField } from '@material/form-field';
import { MDCChipSet } from '@material/chips';

$(document).ready(() => {
  // let groups = null;
  const googleId = $('meta[name=uid]').attr('content');
  const allTextFields = $('.mdc-text-field');
  const addContactDialog = MDCDialog.attachTo(document.querySelector('#add-contact-dialog'));
  const editContactDialog = MDCDialog.attachTo(document.querySelector('#edit-contact-dialog'));
  const addContactChipSet = MDCChipSet.attachTo(document.querySelector('#add-contact-dialog .mdc-chip-set'));
  const editContactChipSet = MDCChipSet.attachTo(document.querySelector('#edit-contact-dialog .mdc-chip-set'));
  const checkbox = new MDCCheckbox(document.querySelector('#add-contact-dialog .mdc-checkbox'));
  const formField = new MDCFormField(document.querySelector('#add-contact-dialog .mdc-form-field'));

  // $.get('/api/groups/get', { uid: googleId }, (response) => {
  //   groups = response;
  // });

  formField.input = checkbox;

  allTextFields.each((index, field) => {
    MDCTextField.attachTo(field);
  });

  $('.add-contact').click(() => {
    addContactDialog.show();
  });

  $('#add-contact-dialog').on('MDCDialog:accept', () => {
    const n = $('#add-contact-dialog input#name').val();
    const p = $('#add-contact-dialog input#parent').is(':checked');
    const e = $('#add-contact-dialog input#email').val();
    const g = [];

    addContactChipSet.chips.forEach((chip) => {
      if (chip.isSelected()) {
        g.push($(chip.root_).data('id'));
      }
    });

    const c = {
      name: n,
      parent: p,
      email: e,
      groups: g,
    };

    $.post('/api/contacts/add', { contact: c, uid: googleId }, (response) => {
      $('.mdc-list.contact-list').append(
        `<li class="mdc-list-item" data-parent=${response.parent} data-group=${response.gorup}> \
          <span class="mdc-list-item__text"> \
            ${response.name} \
            <span class="mdc-list-item__secondary-text"> \
              ${response.email} \
            </span> \
          </span> \
        </li>`
      );
    });
  });

  $('.mdc-list-item.contact').click((e) => {
    $('.editing').removeClass('.editing');
    const name = $(e.target).attr('data-name');
    const email = $(e.target).attr('data-email');
    // const group = $(e.target).attr('data-group');

    $('#edit-contact-dialog .name').val(name);
    $('#edit-contact-dialog .email').val(email);
    $(e.target).addClass('editing');
    // editSelectField.getDefaultFoundation().setValue(group);
    editContactDialog.show();
  });

  $('#edit-contact-dialog').on('MDCDialog:accept', () => {
    const n = $('#edit-contact-dialog input#name').val();
    const p = $('#edit-contact-dialog input#parent').is(':checked');
    const e = $('#edit-contact-dialog input#email').val();
    const g = [];

    editContactChipSet.chips.forEach((chip) => {
      g.push($(chip.root_).data('id'));
    });

    const c = {
      name: n,
      parent: p,
      email: e,
      group: g,
    };

    $.post('/api/contacts/edit', { contact: c, uid: googleId }, (response) => {
      if (!response.error) {
        $('.editing').find('.name').html(`${c.name} <span class="mdc-list-item__secondary-text email">${c.email}</span>`);
        $('.editing').attr('data-group', g);
      }
    });
  });
});
