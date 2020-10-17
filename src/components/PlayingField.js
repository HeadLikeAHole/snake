import React, { useState, useRef, useEffect } from 'react';

import Square from './Square';
import StyledPlayingField from '../styled/StyledPlayingField';
import StyledGameOver from '../styled/StyledGameOver';


const PlayingField = ({ playingField, gameOver }) => {
  // playing field's width in pixels
  const [width, setWidth] = useState(0);
  const divRef = useRef();

  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => setWidth(entries[0].target.getBoundingClientRect().width));
    // ESLint complains when divRef.current is passed to the cleanup function
    // that's why it needs to be saved to the variable divEl and passed to unobserve method
    const divEl = divRef.current;
    resizeObserver.observe(divEl);
    return () => resizeObserver.unobserve(divEl);
  }, [divRef]);

  // calculate height of the square which is equal to its width
  const squareHeight = width / playingField[0].length;

  return (
    <StyledPlayingField
      ref={divRef}
      squareHeight={squareHeight}
      rows={playingField.length}
      cols={playingField[0].length}
    >
      {/*iterate through every element (square) in playingField 2D array to create playing field*/}
      {playingField.map(row => row.map((square, i) => <Square key={i} type={square}/>))}
      {gameOver && <StyledGameOver width={width}>game over</StyledGameOver>}
    </StyledPlayingField>
  );
};


export default PlayingField;
