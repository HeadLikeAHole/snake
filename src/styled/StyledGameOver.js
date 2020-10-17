import styled from 'styled-components';


const StyledGameOver = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: red;
  font-size: ${props => props.width / 20}px;
`;

export default StyledGameOver;
