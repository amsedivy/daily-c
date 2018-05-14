/** this will be the manager of the playback streams */
import Indeterminancy from '../../control/indeterminanceManager';
import Stream from './playbackStream';
import Metronome from './metronome';
import EventDispatcher from '../../control/centralDispatch';
import EvtTypes from '../../model/enum/eventTypes';

const chanceMngr = new Indeterminancy();
let instance = null;

class Conudctor {
  constructor() {
    if (!instance) {
      instance = this;
      const { numStreams } = chanceMngr;
      this.streamList = [];
      this.metronome = new Metronome();

      for (let i = 0; i < numStreams; i += 1) {
        const stream = new Stream();
        this.streamList.push(stream);
      }

      this.uid = Math.floor(Math.random() * 999);

      EventDispatcher.addListener(EvtTypes.SECTION_COMPLETE, this.handleSectionComplete);
    }

    return this;
  }

  initPeformance() {
    this.metronome.start();
  }

  handleSectionComplete(evt) {
    console.log(evt);
  }

  get streams() {
    return [].concat(this.streamList);
  }

  get id() {
    return this.uid;
  }
}

export default new Conudctor();
