import { useEffect, useState, useRef } from 'react';

import { HEIGHT, WIDTH, INITIAL_SPEED, NEXT_LEVEL } from './constants';


// create 2D array which is squares comprising the playing field
// zero means that the square is empty
const createPlayingField = () => Array.from(Array(HEIGHT), () => Array(WIDTH).fill(0));


const createApple = () => [Math.floor(Math.random() * HEIGHT), Math.floor(Math.random() * WIDTH)];


// item is the snake's head or a newly created apple
const detectCollision = (item, snake) => {
  // detect collision between the snake head and a playing field wall
  if (item[0] >= HEIGHT || item[0] < 0 || item[1] >= WIDTH || item[1] < 0) return true;
  // detect collision of the snake with itself
  for (const snakePiece of snake) {
    if (item[0] === snakePiece[0] && item[1] === snakePiece[1]) return true;
  }
  return false
};


const detectAppleCollision = (newSnake, apple, setApple) => {
  if (newSnake[0][0] === apple[0] && newSnake[0][1] === apple[1]) {
    let newApple = createApple();
    while (detectCollision(newApple, newSnake)) {
      newApple = createApple();
    }
    setApple(newApple);
    return true;
  }
  return false;
};


const useGameProgress = () => {
  const [speed, setSpeed] = useState(null);
  const [applesEaten, setApplesEaten] = useState(0);
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);

  const didMountRef = useRef(false);

  useEffect(() => {
      // prevent effects on first render
      if (didMountRef.current) {
        if (level > 1) {
          setSpeed(Math.floor(INITIAL_SPEED / level * 1.5));
        }
        setLevel(Math.floor(applesEaten / NEXT_LEVEL + 1));
        setScore(score + level);
      } else {
        didMountRef.current = true;
      }
  }, [applesEaten, level]);

  return [speed, setSpeed, applesEaten, setApplesEaten, level, setLevel, score, setScore];
}


export { createPlayingField, createApple, detectCollision, detectAppleCollision, useGameProgress };
