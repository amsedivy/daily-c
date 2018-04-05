class PlaybackStream {
  constructor(id) {
    this.id = id;
    this.beginAt = Math.floor(Math.random() * 5);
  }

  get startPoint() { return this.beginAt; }
}

export default PlaybackStream;
