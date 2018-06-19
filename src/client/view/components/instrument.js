import React from 'react';
import InstrumentTypes from '../../../model/enum/instrumentTypes';

function instrumental(props) {
  const performer = InstrumentTypes[Math.floor(Math.random() * InstrumentTypes.length)];
  return (
    <div className="instrument">
      <div className="performer">{performer}</div>
      <div>{` section: ${props.section + 1}`}</div>
    </div>);
}

export default instrumental;
