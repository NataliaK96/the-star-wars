import styled from 'styled-components';
import { Colors } from 'constants/colors';
import backgroundPeople from 'assets/images/people.jpg';

export const Main = styled.div`
  color: ${Colors.white};
  background-image: url(${backgroundPeople});
  background-color: ${Colors.black};
  width: 100%;
`;

export const WrapperPeople = styled.div`
  display: flex;
  flex: auto;
  justify-content: center;
  flex-direction: column;
  margin: 0 20%;
`;
