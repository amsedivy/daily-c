import InstrumentTypes from '../../model/enum/instrumentTypes';

class PlaybackStream {
  constructor(id) {
    this.id = id;
    this.beginAt = Math.round(Math.random());
    this.instrument = InstrumentTypes[Math.floor(Math.random() * InstrumentTypes.length)];
  }

  get startPoint() { return this.beginAt; }
  get voice() { return this.instrument; }
}

export default PlaybackStream;
