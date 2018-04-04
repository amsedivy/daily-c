/** this will be a class to manage the different streams of playback
 telling an individual stream to repeat, rest, or advance */

const state = {};
let instance = null;

class PlaybackManager {
  constructor() {
    if (!instance) {
      instance = this;
    }

    state.numStreams = Math.floor(Math.random() * 4) + 6;
    return this;
  }

  // stub of example function to determine choice
  nextAction(maxReps) {
    const percent = Math.floor(Math.random() * 100) + 1;
    let action = 'rest';
    if (percent <= 50) {
      action = (percent <= 35 && !maxReps) ? 'repeat' : 'advance';
    } else {
      action = (percent <= 85) ? 'rest' : 'skip';
    }

    return action;
  }

  // just statics for now until we set up singleton values
  get numStreams() {
    return state.numStreams;
  }
}


export default PlaybackManager;
