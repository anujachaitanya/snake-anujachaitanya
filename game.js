class Game {
  constructor(snake, ghostSnake, initialFood, gridSize) {
    this.snake = snake;
    this.ghostSnake = ghostSnake;
    this.food = initialFood;
    this.gridSize = gridSize;
    this.previousFood = new Food([0, 0]);
    this.score = new Score(0);
  }

  getState() {
    const state = {};
    state.snake = this.snake.getState();
    state.ghostSnake = this.ghostSnake.getState();
    state.food = this.food.getState();
    state.previousFood = this.previousFood.getState();
    state.score = this.score.getScore();
    return state;
  }

  turnSnake(direction) {
    this.snake['turn' + direction]();
  }

  moveSnakes() {
    this.snake.move();
    this.ghostSnake.move();
  }

  generateNewFood() {
    this.previousFood = this.food;
    const colId = Math.round(Math.random() * this.gridSize[0]);
    const rowId = Math.round(Math.random() * this.gridSize[1]);
    this.food = new Food([colId, rowId]);
  }

  update() {
    this.moveSnakes();
    if (this.snake.eat(this.food)) {
      this.generateNewFood();
      this.score.update();
    }
  }

  moveGhostSnake() {
    const x = Math.random() * 100;
    if (x > 30) {
      this.ghostSnake.turnLeft();
    }
  }

  isDead() {
    const hasTouchedItself = this.snake.hasTouchedItself();
    const hasSnakeCrossedBoundary = this.snake.hasCrossedBoundary(
      this.gridSize
    );
    const ghostSnakeLocation = this.ghostSnake.getState().location;
    const hasTouchedGhost = ghostSnakeLocation.some(coords =>
      this.snake.isHeadOn(coords)
    );
    return hasTouchedItself || hasSnakeCrossedBoundary || hasTouchedGhost;
  }
}
