import { Card as CardBase } from 'antd';
import styled from 'styled-components';

const StyleCard = styled(CardBase)``;

export const Card = styled(StyleCard)`
  &&& {
    display: flex;
    flex-direction: column;
    border: rgba(219, 217, 214, 0.7) solid 1px;
    border-radius: 6px;
    width: 100%;
    min-height: 130px;
    box-shadow: 0 0 8px rgba(158, 155, 152, 0.3);
    & .ant-card-body {
      min-height: 130px;
      padding: 12px 13px 14px;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
`;
