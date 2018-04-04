const startPoint = Math.floor(Math.random() * 5) + 1;

class PlaybackStream {
  constructor(id) {
    this.id = id;
  }

  get startPoint() { return startPoint; }
}

export default PlaybackStream;
