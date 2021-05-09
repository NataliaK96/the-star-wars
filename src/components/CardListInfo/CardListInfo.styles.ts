import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  margin-top: 20px;
`;
export const InfoTitle = styled.div`
  display: flex;
  min-width: 280px;
  font-weight: 500;
  font-size: 18px;
  @media (max-width: 1000px) {
    min-width: 125px;
  }
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;
export const InfoValue = styled.div`
  display: flex;
  font-size: 16px;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;
