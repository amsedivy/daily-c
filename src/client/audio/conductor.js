/** this will be the manager of the playback streams */
import Indeterminancy from '../../control/indeterminanceManager';
import Stream from './playbackStream';

const chanceMngr = new Indeterminancy();
const streams = [];
let instance = null;

class Conudctor {
  constructor() {
    if (!instance) {
      instance = this;
    }

    const { numStreams } = chanceMngr;
    for (let i = 0; i < numStreams; i += 1) {
      const stream = new Stream();
      stream.addListener('partComplete', this.handlePartComplete);
      streams.push(stream);
    }

    return this;
  }

  handlePartComplete(evt) {
    console.log(evt);
  }

  get streams() {
    return [].concat(streams);
  }
}

export default Conudctor;
