/**
*
* GroupList
*
*/
/* eslint no-underscore-dangle: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import Group from 'components/Group';

// import './GroupListScript';
import './GroupList.scss';

function GroupList(props) {
  const { groups } = props;
  const groupItems = groups.map((group) => <Group key={group._id} group={group} />);

  return (
    <div>
      <ul className="mdc-list group-list">
        <li className="mdc-list-item add-group">
          <span className="mdc-list-item__text">
            Add Group
          </span>
        </li>
        {groupItems}
      </ul>
      <aside id="add-group-dialog" className="mdc-dialog" role="alertdialog" aria-labelledby="add-group-dialog-label" aria-describedby="add-group-dialog-description">
        <div className="mdc-dialog__surface">
          <header className="mdc-dialog__header">
            <h2 id="add-group-dialog-label" className="mdc-dialog__header__title">
              Add a new group
            </h2>
          </header>
          <section id="add-group-dialog-description" className="mdc-dialog__body">
            <div className="mdc-text-field mdc-text-field--outlined">
              <input type="text" id="name" className="mdc-text-field__input name" />
              <label htmlFor="name" className="mdc-floating-label">Name of group</label>
              <div className="mdc-notched-outline">
                <svg>
                  <path className="mdc-notched-outline__path" />
                </svg>
              </div>
              <div className="mdc-notched-outline__idle"></div>
            </div>
            <div className="mdc-text-field mdc-text-field--outlined">
              <input type="text" id="color" className="mdc-text-field__input name" />
              <label htmlFor="color" className="mdc-floating-label">Color of group</label>
              <div className="mdc-notched-outline">
                <svg>
                  <path className="mdc-notched-outline__path" />
                </svg>
              </div>
              <div className="mdc-notched-outline__idle"></div>
            </div>
          </section>
          <footer className="mdc-dialog__footer">
            <button type="button" className="mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--accept">Add</button>
          </footer>
        </div>
        <div className="mdc-dialog__backdrop"></div>
      </aside>
    </div>
  );
}

GroupList.propTypes = {
  groups: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
};

export default GroupList;
