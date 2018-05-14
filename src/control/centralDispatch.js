
let instance = null;

class CentralDispatch {
  constructor() {
    if (!instance) {
      // create an instance to hand out
      instance = this;
      // store a unique id for verification purposes
      this.uid = Math.floor(Math.random() * 999);
    }

    // create a map for event types
    this.evts = new Map();
    return instance;
  }

  addListener(evtType, callback) {
    const { evts } = this;

    if (!evts.get(evtType)) {
      // create an item on the map if there is none
      evts.set(evtType, []);
    }

    // get the listener array by event type
    const type = evts.get(evtType);
    // add the listener to the event type's array
    type.push(callback);
  }

  removeListener(evtType, callback) {
    // get the listeners by event
    const { evts } = this;
    const evt = evts.get(evtType) || [];
    const long = evt.length || 0;
    const matches = [];

    // if any of the listeners match the callback add their index to the array
    for (let i = 0; i < long; i += 1) {
      if (evt[i] === callback) {
        matches.push(i);
      }
    }

    // reverse the array, to work backwards
    matches.sort((a, b) => b - a);
    // remove all the items at those indices
    matches.map(idx => evt.slice(idx));
  }

  disptchEvent(evtType, ...args) {
    // get listeners by event type
    const { evts } = this;
    const listeners = evts.get(evtType) || [];

    // fire each listener including the event type and any arguments
    listeners.forEach((callback) => {
      callback(evtType, ...args);
    });
  }

  get id() {
    return this.uid;
  }
}

export default new CentralDispatch();
