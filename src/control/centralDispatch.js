
let instance = null;

class CentralDispatch {
  constructor() {
    if (!instance) {
      instance = this;
    }

    this.listeners = new Map();
    return this;
  }

  addListener(evtType, channel, callback) {
    const { listeners } = this;
    if (!listeners.has(channel)) {
      listeners.set(channel, new Map());
    }

    const chnnl = this.listeners.get(channel);

    if (!chnnl.has(evtType)) {
      chnnl.set(evtType, []);
    }

    const evt = chnnl.get(evtType);

    evt.push(callback);
  }

  removeListener(evtType, channel, callback) {
    const { listeners } = this;
    const chnnl = listeners.get(channel) || null;
    const evt = chnnl.get(evtType) || null;
    let idx = 0;

    evt.forEach((listener) => {
      if (listener === callback) {
        evt.splice(idx, 1);
        idx -= 1;
      }
      idx += 1;
    });
  }

  disptch(evtType, channel, ...args) {
    const { listeners } = this;
    const chnnl = listeners.get(channel) || null;
    const evt = chnnl.get(evtType) || null;

    evt.forEach((callback) => {
      callback(...args);
    });
  }
}

export default CentralDispatch;
