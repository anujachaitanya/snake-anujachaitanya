class Score {
  constructor(score) {
    this.score = score;
  }

  update(points) {
    this.score = this.score + points;
  }

  getScore() {
    return this.score;
  }
}
