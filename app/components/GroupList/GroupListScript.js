import $ from 'jquery';
import { MDCDialog } from '@material/dialog';
import { MDCTextField } from '@material/textfield';

$(document).ready(() => {
  const allFields = $('#add-group-dialog .mdc-text-field');
  const dialog = MDCDialog.attachTo(document.querySelector('#add-group-dialog'));

  allFields.each((index, field) => {
    MDCTextField.attachTo(field);
  });

  $('.add-group').click(() => {
    console.log('Add a group, dialog');
    dialog.show();
  });

  $('#add-group-dialog').on('MDCDialog:accept', () => {
    const n = $('#add-group-dialog input#name').val();
    const g = {
      name: n,
    };

    $.post('/api/groups/add', { group: g, uid: $('#add-group-dialog').data('uid') }, (response) => {
      $('.mdc-list.group-list').append(
        `<li class="mdc-list-item"> \
          <span class="mdc-list-item__text"> \
            ${response.name} \
          </span> \
        </li>`
      );
    });
  });
});
