export default class AudioPool {
  constructor(url, count = 1) {
    this.url = url;
    this.pool = [];
    for (let i = 0; i < count; i++) {
      this.pool.push(new Audio(url));
    }
  }
  play() {
    for (let i = 0; i < this.pool.length; i++) {
      if (this.pool[i].currentTime === 0 || this.pool[i].ended) {
        this.pool[i].play();
        return;
      }
    }
  }
}