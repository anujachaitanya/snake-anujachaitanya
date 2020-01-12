class Game {
  constructor(snake, ghostSnake, foodPosition, gridSize, previousFood) {
    this.snake = snake;
    this.ghostSnake = ghostSnake;
    this.food = foodPosition;
    this.gridSize = gridSize;
    this.previousFood = previousFood;
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

  generateNewFood() {
    this.previousFood = this.food;
    const colId = Math.floor(Math.random() * this.gridSize[0]);
    const rowId = Math.floor(Math.random() * this.gridSize[1]);
    this.food = new Food([colId, rowId]);
  }

  isFoodEaten() {
    const arePositionsEqual = function(cellsA, cellsB) {
      return cellsA.every((position, index) => position == cellsB[index]);
    };
    return arePositionsEqual(this.food.location, this.snake.head);
  }
}
