import styled from 'styled-components';
import { Colors } from 'constants/colors';

export const Wrapper = styled.div`
  display: flex;
  color: ${Colors.white};
  flex-direction: column;
  border-bottom: 1px solid ${Colors.darkGrey};
  padding: 30px;
  &:last-child {
    border-bottom: none;
  }
`;

export const Title = styled.div`
  display: flex;
  text-transform: uppercase;
  color: ${Colors.yellow};
  font-weight: 800;
  font-size: 28px;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;
