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
    // create the necessaries for the audio playback
    if (!this.context) this.setAudioContext();
    if (!this.osc) this.createOscillator();

    // begin the interval
    this.counter = setInterval(() => {
      // dispatch the beat event
      EventDispatcher.dispatchEvent(EventTypes.BEAT);

      // keep track of the place in a 'bar' or 4/4 music
      this.barCounter += 1;
      this.playBeat(this.barCounter === 4);

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
    // if we don't have audio context, there's just no point in going on
    if (!this.context) return;

    // get refs to the necessary audio components
    const { context, osc, amp } = this;
    // create a refrence to now
    const now = context.currentTime;
    // set the pitch in Hz
    const pitch = (firstBeat) ? 265 : 200;

    // give the oscillator time context
    osc.frequency.setValueAtTime(pitch, now);
    // cancel any processes happening already
    amp.gain.cancelScheduledValues(now);
    // begin the pitch, raise the volume then decrease it
    // as an oscillator is just a held tone, so the beat is created by volume changes
    amp.gain.setValueAtTime(amp.gain.value, now);
    amp.gain.linearRampToValueAtTime(0.5, context.currentTime + 0.01);
    amp.gain.linearRampToValueAtTime(0.0, context.currentTime + 0.11);
  }

  setAudioContext() {
    // get the context class from the window object and instantiate it
    const Context = (
      window.AudioContext ||
      window.webkitAudioContext ||
      window.mozAudioContext ||
      window.oAudioContext);

    if (Context) this.context = new Context();
  }

  createOscillator() {
    // use the audio context to create an oscillator and gain object
    this.osc = this.context.createOscillator();
    this.osc.frequency.value = 440;
    this.amp = this.context.createGain();
    this.amp.gain.value = 0;

    // connect the oscillator to the gain and the gain to the window audio object
    this.osc.connect(this.amp);
    this.amp.connect(this.context.destination);
    this.osc.start(0);
  }
}

export default Metronome;
