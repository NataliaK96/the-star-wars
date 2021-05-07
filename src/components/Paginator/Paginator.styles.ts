import styled from 'styled-components';
import { Colors } from 'constants/colors';
import { Pagination as PaginationBase } from 'antd';
import 'antd/dist/antd.css';

export const PaginationStyled = styled(PaginationBase)`
  &&& {
    font-size: 20px;
    color: ${Colors.white};
    }
  }
`;
