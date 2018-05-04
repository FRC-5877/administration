import $ from 'jquery';

$(document).ready(() => {
  switch (location.pathname) {
    case '/dashboard':
      $('.nav-dashboard').addClass('mdc-list-item--selected');
      break;
    case '/mail':
      $('.nav-mail').addClass('mdc-list-item--selected');
      break;
    default:
      $('.nav-dashboard').addClass('mdc-list-item--selected');
      break;
  }
  $('.mdc-drawer a').click((e) => {
    const ele = $(e.currentTarget);
    $('.mdc-list-item--selected').removeClass('mdc-list-item--selected');
    ele.addClass('mdc-list-item--selected');
  });
});
