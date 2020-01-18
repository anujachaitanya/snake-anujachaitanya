class Game {
  constructor(snake, ghostSnake, initialFood, gridSize) {
    this.snake = snake;
    this.ghostSnake = ghostSnake;
    this.food = initialFood;
    this.gridSize = gridSize;
    this.score = new Score(0);
  }

  getState() {
    const state = {};
    state.snake = this.snake.getState();
    state.ghostSnake = this.ghostSnake.getState();
    state.food = this.food.getState();
    state.score = this.score.getScore();
    return state;
  }

  turnSnake(turnCommand) {
    this.snake['turn' + turnCommand]();
  }

  moveSnakes() {
    this.snake.move();
    this.ghostSnake.move();
  }

  generateNewFood() {
    const colId = Math.round(Math.random() * this.gridSize[0]);
    const rowId = Math.round(Math.random() * this.gridSize[1]);
    const foodType = Math.random() * 100 > 70 ? 'super' : 'normal';
    this.food = new Food([colId, rowId], foodType);
  }

  update() {
    this.moveSnakes();
    if (this.snake.eat(this.food)) {
      this.generateNewFood();
      this.score.update(this.food.potential);
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
