import $ from 'jquery';
import { MDCMenu } from '@material/menu';
import { MDCTextField } from '@material/textfield';
import showdown from 'showdown';

const converter = new showdown.Converter();
let markDown;
let timeout = null;

$(document).ready(() => {
  const allFields = $('.mail-editor .mdc-text-field');
  const cc = $('.mail-editor .cc');
  const bcc = $('.mail-editor .bcc');
  const menu = new MDCMenu(document.querySelector('.mail-editor .mdc-menu'));

  allFields.each((index, field) => {
    MDCTextField.attachTo(field);
  });

  $('.mail-editor textarea').keydown(() => {
    clearTimeout(timeout);
    timeout = setTimeout(updateMarkdown, 500);
  });

  $('.mail-editor .add').click(() => {
    menu.open = !menu.open;
  });

  $('.mail-editor .mdc-menu').on('MDCMenu:selected', (e) => {
    if (e.detail.index === 0) {
      if (cc.hasClass('hidden')) {
        cc.removeClass('hidden');
      } else {
        cc.addClass('hidden');
      }
    } else if (e.detail.index === 1) {
      if (bcc.hasClass('hidden')) {
        bcc.removeClass('hidden');
      } else {
        bcc.addClass('hidden');
      }
    }
  });
});

function updateMarkdown() {
  markDown = converter.makeHtml($('.mail-editor textarea').val());
  $('.result').html(markDown);
}
