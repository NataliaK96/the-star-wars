import styled from 'styled-components';
import { Colors } from 'constants/colors';
import { Table as TableBase} from 'antd';

export const TableBlock = styled.div`
  margin: 0 10%;
`;

export const TableStyled = styled(TableBase)`
  &&& {
    & .ant-table {
      background-color: ${Colors.darkGreyTransperent};
      color: ${Colors.white};
    }
    & .ant-table-thead .ant-table-cell {
      background-color: ${Colors.darkGrey};
      color: ${Colors.white};
    }
  }
`
