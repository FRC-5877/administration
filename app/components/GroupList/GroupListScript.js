import $ from 'jquery';
import { MDCDialog } from '@material/dialog';
import { MDCTextField } from '@material/textfield';

$(document).ready(() => {
  const googleId = $('meta[name=uid]').attr('content');
  const allFields = $('#add-group-dialog .mdc-text-field');
  const dialog = MDCDialog.attachTo(document.querySelector('#add-group-dialog'));

  allFields.each((index, field) => {
    MDCTextField.attachTo(field);
  });

  $('.add-group').click(() => {
    dialog.show();
  });

  $('#add-group-dialog').on('MDCDialog:accept', () => {
    const n = $('#add-group-dialog input#name').val();
    const c = $('#add-group-dialog input#color').val();
    const g = {
      name: n,
      color: c,
    };

    $.post('/api/groups/add', { group: g, uid: googleId }, (response) => {
      $('.mdc-list.group-list').append(
        `<li class="mdc-list-item" style="background-color: ${g.color}"> \
          <span class="mdc-list-item__text"> \
            ${response.name} \
          </span> \
        </li>`
      );
      $('#add-group-dialog input#name').val('');
      $('#add-group-dialog input#color').val('');
    });
  });
});
