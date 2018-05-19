/**
*
* GroupSelectList
*
*/
/* eslint no-underscore-dangle: 0 */

import React from 'react';
import PropTypes from 'prop-types';

import GroupSelectChip from 'components/GroupSelectChip';


function GroupSelectList(props) {
  const { groups } = props;
  const optionList = groups.map((group) => <GroupSelectChip key={group._id} group={group} />);
  return (
    <div className="mdc-chip-set mdc-chip-set--filter">
      {optionList}
    </div>
  );
}

GroupSelectList.propTypes = {
  groups: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
};

export default GroupSelectList;
