import InstrumentTypes from '../../model/enum/instrumentTypes';
import EventDispatcher from '../../control/centralDispatch';
import EventTypes from '../../model/enum/eventTypes';
import CSections from '../../model/sections/partsLib';
import Indeterminancy from '../../control/indeterminanceManager';


class PlaybackStream {
  constructor(id) {
    // unique id
    this.id = id;
    // pick a number between 0 and 1
    this.currentSection = Math.round(Math.random());
    // select an instrument at random from the enums
    this.instrument = InstrumentTypes[Math.floor(Math.random() * InstrumentTypes.length)];
    // get the playback information for this section
    this.sectionObj = CSections.getSection(this.currentSection);
    // keep track of time and repeats
    this.barCounter = 0;
    this.repeats = 0;
    this.barListener = this.handleBarComplete.bind(this);

    // add event listeners
    EventDispatcher.addListener(EventTypes.BAR, this.barListener);
  }

  handleBarComplete() {
    // increment the timekeeper
    this.barCounter += 1;
    // if it's less the num of bars in this section, ignore the rest
    if (this.barCounter < this.sectionObj.bars) return;

    // get the type of action to do from the indeterminance manager
    const action = Indeterminancy.nextAction(this.repeats);
    if (action === 'advance') {
      // if were are to advance, increment the section and get the respective obj from the model
      this.currentSection += 1;
      this.sectionObj = CSections.getSection(this.currentSection);
      // reset the bars and repeats
      this.barCounter = 0;
      this.repeats = 0;
    } else {
      // otherwise, simply increment the bars and repeats
      this.repeats += 1;
      this.barCounter += 1;
    }

    // if this instrument has played all the sections there are to play
    if (this.currentSection === CSections.numSections) {
      // remove the event listener and dispatch the instrument complete event
      EventDispatcher.removeListener(EventTypes.BAR, this.barListener);
      EventDispatcher.dispatchEvent(EventTypes.INSTRUMENT_COMPLETE, this.id);
    }
  }

  get nowPlaying() { return this.currentSection; }
  get voice() { return this.instrument; }
}

export default PlaybackStream;
