/** this will be the manager of the playback streams */
import Indeterminancy from '../../control/indeterminanceManager';
import Stream from './playbackStream';
import Metronome from './metronome';
import Dispatcher from '../../control/centralDispatch';
import EventTypes from '../../model/enum/eventTypes';

const chanceMngr = new Indeterminancy();
let instance = null;

class Conudctor {
  constructor() {
    // this is a singleton so create some properties only if instance is null
    if (!instance) {
      instance = this;
      // get number of instrument streams from the chance manager
      const { numStreams } = chanceMngr;
      this.streamList = [];
      // create a metronome to control the pace
      this.metronome = new Metronome();

      for (let i = 0; i < numStreams; i += 1) {
        // create and store new instrument streams
        const stream = new Stream();
        this.streamList.push(stream);
      }

      // create a unique id for verification purposes, if needed
      this.uid = Math.floor(Math.random() * 999);

      // add event listeners
      Dispatcher.once(EventTypes.INIT_COMPLETE, () => {
        console.log('yippidang');
        // start the metronome
        this.metronome.start();
      });
      Dispatcher.addListener(EventTypes.SECTION_COMPLETE, this.handleSectionComplete);
    }

    // return the unique instance
    return instance;
  }

  initPeformance() {
    console.log('yippidang');
    // start the metronome
    this.metronome.start();
  }

  handleSectionComplete(evt, payload) {
    console.log(evt, payload);
  }

  get streams() {
    // return a copy of the streamList
    return [].concat(this.streamList);
  }

  get id() {
    // return the unique id
    return this.uid;
  }
}

export default new Conudctor();
