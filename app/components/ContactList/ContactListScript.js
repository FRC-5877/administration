import $ from 'jquery';
import { MDCDialog } from '@material/dialog';
import { MDCTextField } from '@material/textfield';
import { MDCCheckbox } from '@material/checkbox';
import { MDCFormField } from '@material/form-field';

$(document).ready(() => {
  const allFields = $('.mdc-text-field');
  const addContactDialog = MDCDialog.attachTo(document.querySelector('#add-contact-dialog'));
  const editContactDialog = MDCDialog.attachTo(document.querySelector('#edit-contact-dialog'));
  const checkbox = new MDCCheckbox(document.querySelector('#add-contact-dialog .mdc-checkbox'));
  const formField = new MDCFormField(document.querySelector('#add-contact-dialog .mdc-form-field'));

  formField.input = checkbox;

  allFields.each((index, field) => {
    MDCTextField.attachTo(field);
  });

  $('.add-contact').click(() => {
    console.log('Add a contact, dialog');
    addContactDialog.show();
  });

  $('#add-contact-dialog').on('MDCDialog:accept', () => {
    const n = $('#add-contact-dialog input#name').val();
    const p = $('#add-contact-dialog input#parent').is(':checked');
    const e = $('#add-contact-dialog input#email').val();
    const c = {
      name: n,
      parent: p,
      email: e,
      group: '',
    };

    $.post('/api/contacts/add', { contact: c, uid: $('#add-contact-dialog').data('uid') }, (response) => {
      $('.mdc-list.contact-list').append(
        `<li class="mdc-list-item" data-parent=${response.parent}> \
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
    const name = $(e.target).attr('data-name');
    const email = $(e.target).attr('data-email');
    $('#edit-contact-dialog .name').val(name);
    $('#edit-contact-dialog .email').val(email);
    $(e.target).data('data-old', email);
    editContactDialog.show();
  });

  $('#edit-contact-dialog').on('MDCDialog:accept', () => {
    const n = $('#edit-contact-dialog input#name').val();
    const p = $('#edit-contact-dialog input#parent').is(':checked');
    const e = $('#edit-contact-dialog input#email').val();
    const c = {
      name: n,
      parent: p,
      email: e,
      group: '',
    };
    $.post('/api/contacts/edit', { contact: c, uid: $('.user').attr('data-uid') }, (response) => {
      if (!response.error) {
        const oldEmail = $('').attr('data-old');
        console.log($(`[data-old=${oldEmail}]`), oldEmail);
        $(`[data-email=${oldEmail}]`).find('.name').html(c.name);
      }
    });

  });
});
