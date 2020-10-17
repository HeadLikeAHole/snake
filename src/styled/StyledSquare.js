import styled from 'styled-components';


const StyledSquare = styled.div`
  background-color: ${
    // if type is 0 then the square is empty (black), if type is 1 then it's a snake's piece (brown),
    // if type is 2 then it's an apple (green)
    props => props.type === 0 ? 'rgba(0, 0, 0, 0.7)' : props.type === 1 ? 'brown' : 'rgba(0, 255, 0, 0.7)'
  };
  border-left: 1px solid rgb(40, 40, 40);
  border-bottom: 1px solid rgb(40, 40, 40);
`;


export default StyledSquare;
