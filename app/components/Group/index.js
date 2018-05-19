/**
*
* Group
*
*/

import React from 'react';
import PropTypes from 'prop-types';


function Group(props) {
  const { group } = props;
  const groupStyle = {
    backgroundColor: group.color || '#fff',
  };
  return (
    <li className="mdc-list-item" style={groupStyle} >
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
