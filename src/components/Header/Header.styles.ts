import styled from 'styled-components';
import { Colors } from 'constants/colors';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  border-bottom: 1px solid ${Colors.yellow};
  margin: 0 60px 30px;
  @media (max-width: 600px) {
    margin: 0 60px 15px;
  }
  @media (max-width: 450px) {
    margin: 0 30px 15px;
  }
`;
export const Logo = styled.img`
  height: 100px;
  @media (max-width: 600px) {
    height: 60px;
  }
`;

export const Column = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;
export const MusicWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
