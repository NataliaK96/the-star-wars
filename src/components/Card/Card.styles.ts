import styled from 'styled-components';
import { Colors } from 'constants/colors';

export const Wrapper = styled.div`
  display: flex;
  color: ${Colors.white};
  margin: 0 5%;
  flex-direction: column;
`;
export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;
