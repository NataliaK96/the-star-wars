import styled from 'styled-components';
import { Colors } from 'constants/colors';
import backgroundPeople from 'assets/images/people.png'

export const Main = styled.div`
  display: flex;
  flex: auto;
  justify-content: center;
  flex-direction: column;
  color: ${Colors.white};
  background-image: url(${backgroundPeople});
  background-color: ${Colors.black};
`;
