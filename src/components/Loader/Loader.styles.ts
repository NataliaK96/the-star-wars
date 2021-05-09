import styled from 'styled-components';
import { Spin as SpinBase } from 'antd';
import { Colors } from 'constants/colors';

export const Wrapper = styled.div`
  flex: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Spin = styled(SpinBase)`
  &&& {
    .ant-spin-dot-item {
      background-color: ${Colors.yellow};
    }
  }
`;
