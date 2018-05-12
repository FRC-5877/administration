/**
*
* Contact
*
*/

import React from 'react';
import PropTypes from 'prop-types';

function Contact(props) {
  const { contact } = props;
  return (
    <li className="mdc-list-item contact" key={contact._id} data-parent={contact.parent} data-name={contact.name} data-email={contact.email}>
      <span className="mdc-list-item__text name">
        {contact.name}
        <span className="mdc-list-item__secondary-text email">
          {contact.email}
        </span>
      </span>
    </li>
  );
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default Contact;
