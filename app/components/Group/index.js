/**
*
* Group
*
*/

import React from 'react';
import PropTypes from 'prop-types';


function Group(props) {
  const { group } = props;
  return (
    <li className="mdc-list-item" key={group._id}>
      <span className="mdc-list-item__text">
        {group.name}
      </span>
    </li>
  );
}

Group.propTypes = {
  group: PropTypes.object.isRequired,
};

export default Group;
