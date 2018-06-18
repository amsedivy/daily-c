import React from 'react';
import Conductor from '../audio/conductor';
import Instrument from './components/instrument';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const ensemble = Conductor.streams;
    return (
      <div>
        <h1>build out views here (see designs folder)</h1>
        <div className="ensemble">
          {
            ensemble.map((inst, i) => (
              <Instrument
                key={`inst${inst.startPoint * Math.random()}`}
                id={`instrument ${i + 1}`}
                section={inst.startPoint}
              />))
          }
        </div>
      </div>
    );
  }
}

export default Index;

