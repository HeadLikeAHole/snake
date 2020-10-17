import React from 'react';

import StyledDisplay from '../styled/StyledDisplay';


const Display = ({ text, number }) => {
  return <StyledDisplay>{text}: {number}</StyledDisplay>
};


export default Display;
