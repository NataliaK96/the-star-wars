import styled from 'styled-components';
import { Colors } from 'constants/colors';
import backgroundMain from 'assets/images/background.jpg'

export const Main = styled.div`
  display: flex;
  flex: auto;
  justify-content: center;
  flex-direction: column;
  background-image: url(${backgroundMain});
  background-color: ${Colors.blackMain};
  margin-top: 30px;
  box-shadow: 0 0 30px 20px rgb(0 0 0);
`;
