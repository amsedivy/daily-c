/** this will be an access class to get at the json library
 that will represent the different sections of the composition
 in terms of pitch and duration for raw output.
 future iterations will be access to midi files */

const inC = {
  parts: [],
};

class PartsLibrary {
  constructor(path) {
    this.loadComposition(path);
  }

  async loadComposition(path) {
    const url = path;
    // use node-fetch to load json and parse it, placing the array in the inC object.
  }

  retrieve(num) {
    return inC.parts[num];
  }
}

export default PartsLibrary;
