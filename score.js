class Score {
  constructor(score) {
    this.score = score;
  }

  update() {
    this.score = this.score + 1;
  }

  getScore() {
    return this.score;
  }
}
