import React from 'react';
import PropTypes from 'prop-types';
import EventDispatcher from '../../../control/centralDispatch';
import EventTypes from '../../../model/enum/eventTypes';


class Instrument extends React.Component {
  constructor(props) {
    super(props);
    // set up the state object
    this.state = {
      voice: props.voice,
      section: props.section,
    };

    // set a listener for the playback stream action
    const advanceHandler = this.handleAdvanceSection.bind(this);
    EventDispatcher.addListener(`${EventTypes.ADVANCE}_${props.id}`, advanceHandler);
  }

  handleAdvanceSection(evtType, payload) {
    this.setState({ section: payload });
  }

  render() {
    return (
      <tr className="instrument">
        <td className="performer">{this.state.voice}</td>
        <td>{`section: ${this.state.section}`}</td>
      </tr>);
  }
}

export default Instrument;

Instrument.propTypes = {
  id: PropTypes.string,
  voice: PropTypes.string,
  section: PropTypes.number,
};

Instrument.defaultProps = {
  id: null,
  voice: null,
  section: 0,
};

