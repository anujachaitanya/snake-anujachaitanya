class Food {
  constructor(position) {
    this.position = position.slice();
  }

  get location() {
    return this.position.slice();
  }
}
