class Food {
  constructor(position) {
    this.position = position.slice();
  }

  getState() {
    const state = {};
    state.location = this.position.slice();
    return state;
  }
}
