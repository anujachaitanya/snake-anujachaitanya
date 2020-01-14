const foodLookup = { normal: 1, super: 10 };
class Food {
  constructor(position, type) {
    this.position = position.slice();
    this.type = type;
    this.potential = foodLookup[type];
  }

  getState() {
    const state = {};
    state.location = this.position.slice();
    state.type = this.type;
    state.potential = this.potential;
    return state;
  }
}
