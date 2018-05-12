/**
*
* MailEditor
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import './MailScript';
import './MailEditor.scss';

function MailEditor() {
  return (
    <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12 mail-editor">
      <div className="mdc-layout-grid__inner">
        <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
          <div className="mdc-text-field mdc-text-field--outlined mdc-text-field--with-trailing-icon">
            <input name="to" type="text" className="mdc-text-field__input" />
            <label htmlFor="to" className="mdc-floating-label">To - Seperate emails/groups with a comma</label>
            <i className="material-icons mdc-text-field__icon mdc-menu-anchor add" tabIndex="0" role="button">add
              <div className="mdc-menu" tabIndex="-1">
                <ul className="mdc-menu__items mdc-list" role="menu" aria-hidden="true">
                  <li className="mdc-list-item" role="menuitem" tabIndex="0">Add Cc</li>
                  <li className="mdc-list-item" role="menuitem" tabIndex="0">Add Bcc</li>
                </ul>
              </div>
            </i>
            <div className="mdc-notched-outline">
              <svg>
                <path className="mdc-notched-outline__path" />
              </svg>
            </div>
            <div className="mdc-notched-outline__idle"></div>
          </div>
        </div>
        <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12 cc hidden">
          <div className="mdc-text-field mdc-text-field--outlined">
            <input name="cc" type="text" className="mdc-text-field__input" />
            <label htmlFor="cc" className="mdc-floating-label">Cc</label>
            <div className="mdc-notched-outline">
              <svg>
                <path className="mdc-notched-outline__path" />
              </svg>
            </div>
            <div className="mdc-notched-outline__idle"></div>
          </div>
        </div>
        <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12 bcc hidden">
          <div className="mdc-text-field mdc-text-field--outlined">
            <input name="bcc" type="text" className="mdc-text-field__input" />
            <label htmlFor="bcc" className="mdc-floating-label">Bcc</label>
            <div className="mdc-notched-outline">
              <svg>
                <path className="mdc-notched-outline__path" />
              </svg>
            </div>
            <div className="mdc-notched-outline__idle"></div>
          </div>
        </div>
        <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
          <div className="mdc-text-field mdc-text-field--outlined">
            <input name="subject" type="text" className="mdc-text-field__input" />
            <label htmlFor="subject" className="mdc-floating-label">Subject</label>
            <div className="mdc-notched-outline">
              <svg>
                <path className="mdc-notched-outline__path" />
              </svg>
            </div>
            <div className="mdc-notched-outline__idle"></div>
          </div>
        </div>
      </div>
      <div className="mdc-layout-grid__inner">
        <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12-desktop markdown">
          <a target="__blank" href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg" alt="" width="40px" />
          </a>
          <div className="mdc-text-field mdc-text-field--textarea mdc-text-field--fullwidth mdc-text-field--upgraded">
            <textarea className="mdc-text-field__input" rows="8" cols="40"></textarea>
          </div>
        </div>
        <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12-desktop result"></div>
      </div>
      <button className="mdc-fab material-icons send" aria-label="Favorite">
        <span className="mdc-fab__icon">
          send
        </span>
      </button>
    </div>
  );
}

MailEditor.propTypes = {
  span: PropTypes.string,
};

export default MailEditor;
