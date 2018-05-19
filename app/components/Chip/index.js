/**
*
* Chip
*
*/
/* eslint no-underscore-dangle: 0 */

import React from 'react';
import PropTypes from 'prop-types';


function Chip(props) {
  const { groups, groupId } = props;
  const groupObject = groups.find((g) => g._id === groupId);
  if (groupObject) {
    return (
      <div className="mdc-chip">
        <div className="mdc-chip__text">
          {groupObject.name}
        </div>
      </div>
    );
  }
  return null;
}

Chip.propTypes = {
  groupId: PropTypes.string,
  groups: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
};

export default Chip;
