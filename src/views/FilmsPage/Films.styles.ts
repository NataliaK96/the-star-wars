import styled from 'styled-components';
import { Colors } from 'constants/colors';

export const Main = styled.div`
  color: ${Colors.white};
  display: flex;
  flex-direction: column;
  flex: auto;
`;
export const WrapperFilms = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 30px 20%;
  flex: auto;
  @media (max-width: 600px) {
    margin: 10px;
  }
`;

export const WrapperButtons = styled.div`
  margin: 0 60px 30px;
  @media (max-width: 600px) {
    margin: 0 60px 15px;
  }
  @media (max-width: 450px) {
    margin: 10px;
  }
`;
