import Conductor from '../src/client/audio/conductor';

let idInt;

class SingletonTest {
  constructor() {
    idInt = Conductor.id;
  }

  get idInt() {
    return idInt;
  }
}

export default SingletonTest;
