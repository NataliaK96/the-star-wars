import styled from 'styled-components';
import { Colors } from 'constants/colors';
import backgroundStarship from 'assets/images/starship.png'

export const Main = styled.div`
  display: flex;
  flex: auto;
  justify-content: center;
  flex-direction: column;
  color: ${Colors.white};
  background-image: url(${backgroundStarship});
  background-color: ${Colors.black};
`;
