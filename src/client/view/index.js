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
        {
          ensemble.map(inst => <Instrument id={inst.id} section={inst.startPoint} />)
        }
      </div>
    );
  }
}

export default Index;

