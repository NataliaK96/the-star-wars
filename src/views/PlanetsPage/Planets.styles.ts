import styled from 'styled-components';
import { Colors } from 'constants/colors';
import backgroundPlanets from 'assets/images/planets.jpg';

export const Main = styled.div`
  color: ${Colors.white};
  background-image: url(${backgroundPlanets});
  background-color: ${Colors.black};
  background-position-y: top;
  background-position-x: right;
  flex: auto;
  display: flex;
  flex-direction: column;
  background-repeat: no-repeat;
  @media (max-width: 600px) {
    background-position-x: center;
  }
`;

export const WrapperPlanets = styled.div`
  background-color: ${Colors.greyTransperent};
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 20%;
  flex: auto;
  @media (max-width: 600px) {
    margin: 0 30px;
  }
  @media (max-width: 450px) {
    margin: 0 10px;
  }
`;

export const WrapperButtons = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: -webkit-fill-available;
  margin: 0 60px 30px;
  @media (max-width: 450px) {
    margin: 0 10px 10px;
  }
`;

export const BackAndFilter = styled.div`
  display: flex;
  flex-direction: row;
`;
