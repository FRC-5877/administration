import $ from 'jquery';
import { push } from 'react-router-redux';

$(document).ready(() => {
  switch (location.pathname) {
    case '/dashboard':
      $('.nav-dashboard').addClass('mdc-list-item--selected');
      break;
    case '/mail':
      $('.nav-mail').addClass('mdc-list-item--selected');
      break;
    default:
      console.log('nothing');
      $('.nav-dashboard').addClass('mdc-list-item--selected');
      break;
  }
  $('.mdc-drawer a').click((e) => {
    const ele = $(e.currentTarget);
    $('.mdc-list-item--selected').removeClass('mdc-list-item--selected');
    ele.addClass('mdc-list-item--selected');
  });
});
