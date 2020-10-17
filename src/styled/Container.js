import styled from 'styled-components';


const Container = styled.div`
  margin: 2rem auto;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 2%;
  // prevent stretching of the playing field div to the height of the container so "Game Over" can be centered
  align-items: start;
`;


export default Container;
