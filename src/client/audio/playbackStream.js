import InstrumentTypes from '../../model/enum/instrumentTypes';

class PlaybackStream {
  constructor(id) {
    // unique id
    this.id = id;
    // pick a number between 0 and 1
    this.currentSection = Math.round(Math.random());
    // select an instrument at random from the enums
    this.instrument = InstrumentTypes[Math.floor(Math.random() * InstrumentTypes.length)];
  }

  get nowPlaying() { return this.currentSection; }
  get voice() { return this.instrument; }
}

export default PlaybackStream;
