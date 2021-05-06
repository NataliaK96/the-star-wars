import styled from 'styled-components';
import { Colors } from 'constants/colors';
import backgroundMain from 'assets/images/background.jpg'

export const Main = styled.div`
  display: flex;
  flex: auto;
  justify-content: center;
  flex-direction: column;
  background-image: url(${backgroundMain});
  background-color: ${Colors.black};
  background-size: cover;
`;
