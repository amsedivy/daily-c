
let instance = null;
let id;

class CentralDispatch {
  constructor() {
    if (!instance) {
      instance = this;
      id = Math.floor(Math.random() * 999);
    }

    this.evts = new Map();
    return this;
  }

  addListener(evtType, callback) {
    const { evts } = this;

    const type = evts.get(evtType) || [];
    type.push(callback);
  }

  removeListener(evtType, callback) {
    const { evts } = this;
    const evt = evts.get(evtType) || null;
    const long = evt.length || 0;
    const matches = [];

    for (let i = 0; i < long; i += 1) {
      if (evt[i] === callback) {
        matches.push(i);
      }
    }

    matches.sort((a, b) => b - a);
    matches.map(idx => evt.slice(idx));
  }

  disptch(evtType, channel, ...args) {
    const { listeners } = this;
    const chnnl = listeners.get(channel) || null;
    const evt = chnnl.get(evtType) || null;

    evt.forEach((callback) => {
      callback(...args);
    });
  }

  get id() {
    return id;
  }
}

export default new CentralDispatch();
