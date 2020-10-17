import styled from 'styled-components';


const StyledButton = styled.div`
  padding: 1rem;
  border-radius: 15px;
  background-color: rgb(50, 50, 50);
  color: rgb(215, 215, 215);
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 1.5rem;
  &:hover {
    background: palevioletred;
    cursor: pointer;
  }
  &:active {
    background-color: rgb(200, 112, 147)
  }
`;


export default StyledButton;
