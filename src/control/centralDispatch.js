
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
    // get the listener array by event type
    const type = this.getEventsByType(evtType);
    // add the listener to the event type's array
    type.push({ func: callback });
  }

  removeListener(evtType, callback) {
    // get the listeners by event
    const { evts } = this;
    const evtList = evts.get(evtType) || [];
    const long = evtList.length || 0;
    const matches = [];

    // if any of the listeners match the callback add their index to the array
    for (let i = 0; i < long; i += 1) {
      if (evtList[i].func === callback) {
        matches.push(i);
      }
    }

    // reverse the array, to work backwards
    matches.sort((a, b) => b - a);
    // remove all the items at those indices
    matches.map(idx => evtList.splice(idx, 1));
  }

  once(evtType, callback) {
    // get the listener array by event type
    const type = this.getEventsByType(evtType);

    // add the listener to the event type's array
    type.push({ func: callback, singular: true });
  }

  disptchEvent(evtType, ...args) {
    // get listeners by event type
    const { evts } = this;
    const listeners = evts.get(evtType) || [];

    // fire each listener including the event type and any arguments
    listeners.forEach((callback) => {
      callback.func(evtType, ...args);

      if (callback.singular) {
        console.log('remove this listener');
        this.removeListener(evtType, callback.func);
      }
    });
  }

  getEventsByType(evtName) {
    const { evts } = this;

    if (!evts.get(evtName)) {
      // create an item on the map if there is none
      evts.set(evtName, []);
    }

    // return the listener array by event type
    return evts.get(evtName);
  }

  get id() {
    return this.uid;
  }
}

export default new CentralDispatch();
