import EventDispatcher from '../../control/centralDispatch';
import EventTypes from '../../model/enum/eventTypes';

class Metronome {
  constructor() {
    // set the timespan of a quarternote to a value between 450-550 milliseconds
    this.quaternote = Math.floor(Math.random() * 100) + 450;
    this.barCounter = 0;
  }

  start() {
    // begin the interval
    this.counter = setInterval(() => {
      // dispatch the beat event
      EventDispatcher.dispatchEvent(EventTypes.BEAT);

      // keep track of the place in a 'bar' or 4/4 music
      this.barCounter += 1;

      // if we've reached the end of the bar, reset the counter and dispatch the bar event
      if (this.barCounter === 4) {
        this.barCounter = 0;
        EventDispatcher.dispatchEvent(EventTypes.BAR);
      }
    }, this.quaternote);
  }

  stop() {
    // stop the interval
    clearInterval(this.counter);
  }
}

export default Metronome;
