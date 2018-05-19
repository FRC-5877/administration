/**
*
* Contact
*
*/
/* eslint no-underscore-dangle: 0 */

import React from 'react';
import PropTypes from 'prop-types';

import Chip from 'components/Chip';

function Contact(props) {
  const { contact, groups } = props;
  const chips = contact.groups.map((groupId) => <Chip key={groupId} groupId={groupId} groups={groups} />);

  return (
    <li className="mdc-list-item contact" key={contact._id} data-id={contact._id} data-parent={contact.parent} data-group={contact.group} data-name={contact.name} data-email={contact.email}>
      <span className="mdc-list-item__text name">
        {contact.name}
        <span className="mdc-list-item__secondary-text email">
          {contact.email}
        </span>
      </span>
      <span className="mdc-list-item__meta">
        <div className="mdc-chip-set">
          {chips}
        </div>
      </span>
    </li>
  );
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  groups: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
};

export default Contact;
