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
    console.log(ensemble[0].voice);
    return (
      <div>
        <h1>build out views here (see designs folder)</h1>
        <table className="ensemble">
          <tbody>
            {
              ensemble.map((inst, i) => (
                <Instrument
                  key={`inC_${Math.floor(Math.random() * 1000)}`}
                  id={`${i}_${inst.voice}`}
                  section={inst.startPoint}
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

