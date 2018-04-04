/* global alert */
import React from 'react';
import ChanceMngr from '../../control/indeterminanceManager';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const mngr = new ChanceMngr();
    alert(mngr.numStreams);
    return (
      <div>
        <h1>Views forthcoming (see designs folder)</h1>
      </div>
    );
  }
}

export default Index;

