/**
 *
 * Mail
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import $ from 'jquery';
import { MDCMenu } from '@material/menu';
import { MDCTextField } from '@material/textfield';
import showdown from 'showdown';

import MailEditor from 'components/MailEditor';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import { makeSelectContactList, makeSelectGroupList } from 'containers/Contacts/selectors';

import makeSelectMail from './selectors';
import reducer from './reducer';
import saga from './saga';

import './Mail.scss';
import { sendMail } from './actions';

export class Mail extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    const { sendMailProp, contacts, groups } = this.props;
    const userId = $('meta[name=uid]').attr('content');
    const converter = new showdown.Converter();
    let markDown = null;
    let timeout = null;
    const allFields = $('.mail-editor .mdc-text-field');
    const cc = $('.mail-editor .cc');
    const bcc = $('.mail-editor .bcc');
    const menu = new MDCMenu(document.querySelector('.mail-editor .mdc-menu'));
    console.log(contacts);
    allFields.each((index, field) => {
      MDCTextField.attachTo(field);
    });

    $('.mail-editor textarea').keydown(() => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        markDown = converter.makeHtml($('.mail-editor textarea').val());
        $('.result').html(markDown);
      }, 500);
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

    $('.mail-editor button.send').click(() => {
      const s = $('.mail-editor input[name=subject]').val();
      const b = $('.mail-editor .result').html();

      sendMailProp({ subject: s, body: b, uid: userId });
    });
  }

  render() {
    const { contacts, groups } = this.props;
    console.log(`CONTACTS: ${JSON.stringify(contacts)}`);
    console.log(`GROUPS: ${JSON.stringify(groups)}`);
    return (
      <div className="mail container">
        <div className="mdc-layout-grid">
          <div className="mdc-layout-grid__inner mdc-layout-grid-remove-gutter">
            <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12 title">
              <h4>Send Email</h4>
            </div>
            <MailEditor contactsGroups={contacts.concat(groups)} />
          </div>
        </div>
      </div>
    );
  }
}

Mail.propTypes = {
  dispatch: PropTypes.func.isRequired,
  sendMailProp: PropTypes.func,
  contacts: PropTypes.array,
  groups: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  mail: makeSelectMail(),
  contacts: makeSelectContactList(),
  groups: makeSelectGroupList(),
});

function mapDispatchToProps(dispatch) {
  return {
    sendMailProp: (email) => dispatch(sendMail(email)),
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'mail', reducer });
const withSaga = injectSaga({ key: 'mail', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Mail);
