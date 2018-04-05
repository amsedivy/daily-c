/** this will be the manager of the playback streams */
import Indeterminancy from '../../control/indeterminanceManager';
import Stream from './playbackStream';
import EventDispatcher from '../../control/centralDispatch';
import EvtTypes from '../../model/enum/eventTypes';

const chanceMngr = new Indeterminancy();
const streams = [];
let instance = null;

class Conudctor {
  constructor() {
    if (!instance) {
      instance = this;
      const { numStreams } = chanceMngr;

      for (let i = 0; i < numStreams; i += 1) {
        const stream = new Stream();
        streams.push(stream);
      }

      EventDispatcher.addListener(EvtTypes.SECTION_COMPLETE, this.handleSectionComplete);
    }

    return this;
  }

  handleSectionComplete(evt) {
    console.log(evt);
  }

  get streams() {
    return [].concat(streams);
  }
}

export default new Conudctor();
