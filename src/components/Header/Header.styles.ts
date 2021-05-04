import styled from 'styled-components';
import {Colors} from 'constants/colors'

export const HeaderMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 16vh;
  padding: 12px;
  border-bottom: 1px solid ${Colors.yellow};
  margin: 0 5%;

`;
export const Logo = styled.img`
  height: 100%;
  width: auto;
`;
