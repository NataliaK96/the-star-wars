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
    margin: 20px 0 0 5%;
    position: absolute;
    }
  }
`;
