/**
*
* GroupSelectChip
*
*/
/* eslint no-underscore-dangle: 0 */

import React from 'react';
import PropType from 'prop-types';


function GroupSelectChip(props) {
  const { group } = props;
  return (
    <div className="mdc-chip" data-id={group._id} data-name={group.name}>
      <div className="mdc-chip__checkmark" >
        <svg className="mdc-chip__checkmark-svg" viewBox="-2 -3 30 30">
          <path className="mdc-chip__checkmark-path" fill="none" stroke="black" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
        </svg>
      </div>
      <div className="mdc-chip__text">{group.name}</div>
    </div>
  );
}

GroupSelectChip.propTypes = {
  group: PropType.object,
};

export default GroupSelectChip;
