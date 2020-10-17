// playing field height in number of squares
const HEIGHT = 30;

// playing field width in number of squares
const WIDTH = 40;

// snake's starting position (calculated to be always in the center of the playing field)
let startY = Math.floor(HEIGHT / 2);
let startX = Math.floor(WIDTH / 2);
const SNAKE_START = [[startY, startX], [startY, startX - 1]];

// snake moves to the right on game start
const START_DIRECTION = [0, 1];

const DIRECTIONS = {
  37: [0, -1], // left
  38: [-1, 0], // up
  39: [0, 1], // right
  40: [1, 0], // down
};

// snake speed on game start
const INITIAL_SPEED = 400;

// amount of apples which has to be eaten to go to the next level
const NEXT_LEVEL = 5;


export { HEIGHT, WIDTH, SNAKE_START, START_DIRECTION, DIRECTIONS, INITIAL_SPEED, NEXT_LEVEL };
