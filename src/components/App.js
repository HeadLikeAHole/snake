import React, { useState } from 'react';

import Container from '../styled/Container';
import { createApple } from '../gameFunctions';
import { createPlayingField } from '../gameFunctions';
import { detectAppleCollision } from '../gameFunctions';
import { detectCollision } from '../gameFunctions';
import { DIRECTIONS } from '../constants';
import Display from './Display';
import { INITIAL_SPEED } from '../constants';
import PlayingField from './PlayingField';
import { SNAKE_START } from '../constants';
import { START_DIRECTION } from '../constants';
import StyledButton from '../styled/StyledButton';
import { useGameProgress } from '../gameFunctions';
import useInterval from '../customHooks/useInterval';
import usePlayingField from '../customHooks/usePlayingField';


const App = () => {
  const [snake, setSnake] = useState(null);
  const [apple, setApple] = useState(null);
  const [playingField, setPlayingField] = usePlayingField(snake, apple);
  const [direction, setDirection] = useState(START_DIRECTION);
  const [gameOver, setGameOver] = useState(false);
  const [speed, setSpeed, applesEaten, setApplesEaten, level, setLevel, score, setScore] = useGameProgress();

  const startGame = () => {
    setSnake(SNAKE_START);
    setApple(createApple());
    setPlayingField(createPlayingField());
    setDirection(START_DIRECTION);
    setSpeed(INITIAL_SPEED);
    setGameOver(false);
    setApplesEaten(0);
    setScore(0);
    setLevel(1);
  };

  const endGame = () => {
    setSpeed(null);
    setGameOver(true);
  };

  const handleKeyDown = ({ keyCode }) => {
    // make sure that keycodes are 37, 38, 39, 40 so game doesn't crash
    if (keyCode !== 37 && keyCode !== 38 && keyCode !== 39 && keyCode !== 40) return;
    setDirection(DIRECTIONS[keyCode]);
  };

  const moveSnake = () => {
    // make sure that snake doesn't move opposite to current direction and collide with itself
    // for some reason doesn't work if keys are pressed fast
    // keyCode === 37 && direction[1] !== 1 && setDirection(DIRECTIONS[keyCode]);
    // keyCode === 38 && direction[0] !== 1 && setDirection(DIRECTIONS[keyCode]);
    // keyCode === 39 && direction[1] !== -1 && setDirection(DIRECTIONS[keyCode]);
    // keyCode === 40 && direction[0] !== -1 && setDirection(DIRECTIONS[keyCode]);

    const snakeCopy = JSON.parse(JSON.stringify(snake));
    // collision detection is done one move ahead
    const newSnakeHead = [snakeCopy[0][0] + direction[0], snakeCopy[0][1] + direction[1]];
    // make snake appear to crawl by adding "head" (first element of array) and removing "tail" (last element of array)
    snakeCopy.unshift(newSnakeHead);
    if (detectCollision(newSnakeHead, snake)) {
      endGame();
      return;
    }
    if (detectAppleCollision(snakeCopy, apple, setApple)) {
      setApplesEaten(applesEaten => applesEaten + 1);
    } else {
      snakeCopy.pop();
    }
    setSnake(snakeCopy);
  };

  useInterval(() => moveSnake(), speed);

  return (
   <Container role="button" tabIndex="0" onKeyDown={e => handleKeyDown(e)}>
    <PlayingField playingField={playingField} gameOver={gameOver} />
    <div>
      <Display text='apples' number={applesEaten} />
      <Display text='level' number={level} />
      <Display text='score' number={score} />
      <div style={{ marginTop: '5rem' }}>
        <StyledButton onClick={startGame}>start game</StyledButton>
      </div>
    </div>
   </Container>
  )
}


export default App;
