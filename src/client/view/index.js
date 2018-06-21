import React from 'react';
import Conductor from '../../control/conductor';
import Instrument from './components/instrument';
import Dispatcher from '../../control/centralDispatch';
import EventTypes from '../../model/enum/eventTypes';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    Dispatcher.dispatchEvent(EventTypes.INIT_COMPLETE);
  }

  render() {
    const ensemble = Conductor.streams;
    return (
      <div>
        <h1>build out views here (see designs folder)</h1>
        <table className="ensemble">
          <tbody>
            {
              ensemble.map((inst) => (
                <Instrument
                  key={`inC_${(Math.random().toString(36))}`}
                  id={inst.id}
                  section={inst.nowPlaying}
                  voice={inst.voice}
                />))
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Index;

