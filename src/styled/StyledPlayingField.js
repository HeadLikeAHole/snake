import styled from 'styled-components';


const StyledPlayingField = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: repeat(${props => props.rows}, ${props => props.squareHeight}px);
  grid-template-columns: repeat(${props => props.cols}, 1fr);
  position: relative;
`;


export default StyledPlayingField;
