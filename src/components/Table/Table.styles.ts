import styled from 'styled-components'
import { Colors } from 'constants/colors'
import { Table as TableBase } from 'antd'

export const TableWrapper = styled.div`
  margin: 0 100px;
  flex: auto;
`

export const TableStyled = styled(TableBase)`
  &&& {
    & .ant-table {
      background-color: ${Colors.darkGreyTransperent};
      color: ${Colors.white};
      font-size: 18px;
    }
    & .ant-table-thead .ant-table-cell {
      background-color: ${Colors.darkGrey};
      color: ${Colors.white};
      font-size: 18px;
    }
    & .ant-table-row {
      :hover {
        color: ${Colors.blue};
      }
    }
    & .ant-table-pagination.ant-pagination {
      display: none;
    }
  }
`
