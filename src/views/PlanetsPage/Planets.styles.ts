import styled from 'styled-components';
import { Colors } from 'constants/colors';
import backgroundPlanets from 'assets/images/planets.png'

export const Main = styled.div`
  display: flex;
  flex: auto;
  justify-content: center;
  flex-direction: column;
  color: ${Colors.white};
  background-image: url(${backgroundPlanets});
  background-color: ${Colors.black};
`;
