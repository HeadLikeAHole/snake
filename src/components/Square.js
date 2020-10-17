import React from 'react';

import StyledSquare from '../styled/StyledSquare';


const Square = ({ type }) => {
  return <StyledSquare type={type}></StyledSquare>;
};


// re-render only changed cells
export default React.memo(Square);
