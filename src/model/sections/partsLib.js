/** this will be an access class to get at the json library
 that will represent the different sections of the composition
 in terms of pitch and duration for raw output.
 future iterations will be access to midi files */

const inC = {
  parts: [
    { bars: 0 },
    { bars: 1 },
    { bars: 2 },
    { bars: 1 },
    { bars: 4 },
    { bars: 2 },
    { bars: 3 },
  ],
};

class PartsLibrary {
  constructor(path) {
    this.loadComposition(path);
  }

  async loadComposition(path) {
    const url = path;
    // use node-fetch to load json and parse it, placing the array in the inC object.
  }

  // return a section from the composition list by index (0 being a rest before starting)
  static getSection(num) {
    return (num < inC.parts.length) ? Object.assign(inC.parts[num]) : null;
  }

  // get the length of the array (will be constant, but hey, it doesn't hurt to be dynamic)
  static get numSections() { return inC.parts.length; }
}

export default PartsLibrary;
