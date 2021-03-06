import { expect } from 'chai';
import { describe, it } from 'mocha';
import SingletonTest from './singletonTest';
import EventDispatcher from '../src/control/centralDispatch';
import Metronome from '../src/client/audio/metronome';


describe('singleton verfier', () => {
  it('both instances of the singleton should return the same id', () => {
    const single = new SingletonTest();
    const double = new SingletonTest();

    expect(single.idInt).to.equal(double.idInt);
  });
});

describe('test event dispatch', () => {
  it('event should be fired and received, with arguments', (done) => {
    const evt = 'testEvent';
    const handler = function (type, payload) {
      expect(payload).to.equal(1);
      done();
    };

    EventDispatcher.addListener(evt, handler);
    EventDispatcher.dispatchEvent(evt, 1);
  });
});

describe('test event removal', () => {
  it('event should be able to be removed from the event list', () => {
    function handler(eventType) { console.log(eventType); }
    const evt = 'test_event';
    EventDispatcher.addListener(evt, handler);
    EventDispatcher.removeListener(evt, handler);
    const evtList = EventDispatcher.getEventsByType(evt);

    expect(evtList.length).to.equal(0);
  });
});

describe('test metronome', () => {
  it('function should receive beat event fired by metronome class', (done) => {
    const metro = new Metronome();
    const handler = function (type) {
      metro.stop();
      expect(type).to.equal('beat');
      done();
    };

    EventDispatcher.addListener('beat', handler);
    metro.start();
  });
});
