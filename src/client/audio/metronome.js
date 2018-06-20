/* global window */
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
    this.setAudioContext();
    this.createOscillator();

    this.counter = setInterval(() => {
      // dispatch the beat event
      EventDispatcher.dispatchEvent(EventTypes.BEAT);

      // keep track of the place in a 'bar' or 4/4 music
      this.barCounter += 1;
      this.playBeat(this.barCounter === 1);

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

  playBeat(firstBeat) {
    if (!this.context) return;
    const { context, osc, amp } = this;
    const now = context.currentTime;
    const pitch = (firstBeat) ? 280 : 200;

    osc.frequency.setValueAtTime(pitch, now);
    amp.gain.cancelScheduledValues(now);
    amp.gain.setValueAtTime(amp.gain.value, now);
    amp.gain.linearRampToValueAtTime(0.5, context.currentTime + 0.01);
    amp.gain.linearRampToValueAtTime(0.0, context.currentTime + 0.11);
  }

  createOscillator() {
    this.osc = this.context.createOscillator();
    this.osc.frequency.value = 440;
    this.amp = this.context.createGain();
    this.amp.gain.value = 0;

    this.osc.connect(this.amp);
    this.amp.connect(this.context.destination);
    this.osc.start(0);
  }

  setAudioContext() {
    const Context = (
      window.AudioContext ||
      window.webkitAudioContext ||
      window.mozAudioContext ||
      window.oAudioContext);
    if (Context) {
      this.context = new Context();
    }
  }
}

export default Metronome;
