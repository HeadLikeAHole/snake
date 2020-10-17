import React from 'react';

import StyledButton from '../styled/StyledButton';


const Button = ({ callback, text }) => {
  return <StyledButton onClick={callback}>{text}</StyledButton>
};


export default Button;
