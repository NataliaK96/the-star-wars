import styled from 'styled-components';
import { Colors } from 'constants/colors';
import backgroundPlanets from 'assets/images/planets.jpg'

export const Main = styled.div`
  color: ${Colors.white};
  background-image: url(${backgroundPlanets});
  background-color: ${Colors.black};
  width: 100%;
`;

export const WrapperPlanets = styled.div`
  display: flex;
  flex: auto;
  justify-content: center;
  flex-direction: column;
  margin: 0 20%;
`;
