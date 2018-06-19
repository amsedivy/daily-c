import EventDispatcher from '../../control/centralDispatch';
import EventTypes from '../../model/enum/eventTypes';

class Metronome {
  constructor() {
    // set the timespan of a quarternote to a value between 450-550 milliseconds
    this.quaternote = Math.floor(Math.random() * 100) + 450;
  }

  start() {
    // begin the interval
    this.counter = setInterval(() => {
      EventDispatcher.disptchEvent(EventTypes.BEAT);
      console.log('beat');
    }, this.quaternote);

    // fire the first beat
    EventDispatcher.disptchEvent(EventTypes.BEAT);
  }

  stop() {
    // stop the interval
    clearInterval(this.counter);
  }
}

export default Metronome;
