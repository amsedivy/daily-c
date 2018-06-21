/** this will be the manager of the playback streams */
import Indeterminancy from './indeterminanceManager';
import Stream from '../client/audio/playbackStream';
import Metronome from '../client/audio/metronome';
import EventDispatcher from './centralDispatch';
import EventTypes from '../model/enum/eventTypes';

let instance = null;

class Conudctor {
  constructor() {
    // this is a singleton so create some properties only if instance is null
    if (!instance) {
      instance = this;
      // get number of instrument streams from the chance manager
      const { numStreams } = Indeterminancy;
      this.streamList = [];

      // create a metronome to control the pace
      this.metronome = new Metronome();
      this.playback = new Map();
      this.finishCounter = 0;

      // build out the playback stream objects
      for (let i = 0; i < numStreams; i += 1) {
        // create and store new instrument streams
        const stream = new Stream(`instrument_${i}`);
        this.streamList.push(stream);
        // add the instrument to the playback history map
        this.playback.set(stream.id, {});
      }

      // create a unique id for verification purposes, if needed
      this.uid = Math.floor(Math.random() * 999);

      // add event listeners
      EventDispatcher.once(EventTypes.INIT_COMPLETE, () => {
        // start the metronome
        this.metronome.start();
      });

      EventDispatcher.addListener(EventTypes.SECTION_COMPLETE, this.handleSectionComplete);
      EventDispatcher.addListener(EventTypes.ADD_REPEAT, this.addRepeat.bind(this));
      EventDispatcher.addListener(
        EventTypes.INSTRUMENT_COMPLETE,
        this.handleInstrumentComplete.bind(this),
      );
    }

    // return the unique instance
    return instance;
  }

  addRepeat(evtType, payload) {
    const inst = this.playback.get(payload.voice);
    inst[payload.section] += 1;
  }

  getRepeats(instrument, section) {
    const inst = this.playback.get(instrument);
    return inst[section];
  }

  handleInstrumentComplete() {
    this.finishCounter += 1;
    if (this.finishCounter === this.streams.length) {
      this.metronome.stop();
    }
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
