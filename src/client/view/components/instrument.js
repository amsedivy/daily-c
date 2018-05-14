import React from 'react';
import Type from 'prop-types';
import InstrumentTypes from '../../../model/enum/instrumentTypes';

class Instrument extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.id = props.id;
    this.performer = InstrumentTypes[Math.floor(Math.random() * InstrumentTypes.length)];
  }

  render() {
    return <div><b>{`${this.performer}`}</b>{`, section no.${this.props.section + 1}`}</div>;
  }
}

export default Instrument;

Instrument.propTypes = {
  section: Type.number,
  id: Type.string,
};

Instrument.defaultProps = {
  section: 0,
  id: String(Math.floor(Math.random() * 100)),
};
