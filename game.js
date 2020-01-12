class Game {
  constructor(snake, ghostSnake, foodPosition, gridSize) {
    this.snake = snake;
    this.ghostSnake = ghostSnake;
    this.food = foodPosition;
    this.gridSize = gridSize;
  }

  getState() {
    const state = {};
    state.snake = this.snake.getState();
    state.ghostSnake = this.ghostSnake.getState();
    return state;
  }

  turnSnake(turnCmd) {
    this.snake['turn' + turnCmd]();
  }

  moveSnakes() {
    this.snake.move();
    this.ghostSnake.move();
  }

  update() {
    this.moveSnakes();
  }

  moveGhostSnake() {
    const x = Math.random() * 100;
    if (x > 50) {
      this.ghostSnake.turnLeft();
    }
  }

  isFoodEaten() {}
}
