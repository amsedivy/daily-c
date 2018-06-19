/** this will be a class to manage the different streams of playback
 telling an individual stream to repeat, rest, or advance */

let instance = null;

class PlaybackManager {
  constructor() {
    if (!instance) {
      instance = this;

      // create these things only once
      this.state = {};
      // create a random num of instruments between 6 and 10
      this.state.numStreams = Math.ceil(Math.random() * 5) + 5;
    }
    return this;
  }

  // stub of example function to determine choice
  nextAction(repsPlayed) {
    // get a random int between 1-100
    const percent = Math.ceil(Math.random() * 100);
    // the more the current piece is played, the more likely to advance
    const adjust = repsPlayed * 5;
    // if the random number and the repeat adjustment are more than 75, set advance as the action
    const action = (percent + adjust < 75) ? 'repeat' : 'advance';

    // return the decided action
    return action;
  }

  // just statics for now until we set up singleton values
  get numStreams() { return this.state.numStreams; }
}


export default PlaybackManager;
