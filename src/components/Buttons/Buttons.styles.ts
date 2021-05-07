import styled from 'styled-components';
import { Colors } from 'constants/colors';
import { Button as ButtonGoBack } from 'antd';

export const GoBackStyled = styled(ButtonGoBack)`
  &&& {
    display: flex;
    align-items: center;
    color: ${Colors.yellow};
    background-color: transparent;
    border-color: ${Colors.yellow};
    font-size: 18px;
    margin-right: 20px;
    & .ant-dropdown-trigger .anticon.anticon-down {
      font-size: 18px;
    padding-top: 4px;
    }
  }
`;