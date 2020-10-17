import { useState, useEffect } from 'react';

import { createPlayingField } from '../gameFunctions';


const usePlayingField = (snake, apple) => {
  const [playingField, setPlayingField] = useState(createPlayingField());

  useEffect(() => {
    if (snake !== null && apple !== null) {
      const updatePlayingField = playingField => {
        // flush the playing field
        const newPlayingField = playingField.map(row => row.map(() => 0));
        snake.forEach(piece => newPlayingField[piece[0]][piece[1]] = 1);
        newPlayingField[apple[0]][apple[1]] = 2;
        return newPlayingField;
      };
      setPlayingField(playingField => updatePlayingField(playingField));
    }
  }, [snake, apple]);

  return [playingField, setPlayingField];
};


export default usePlayingField;
