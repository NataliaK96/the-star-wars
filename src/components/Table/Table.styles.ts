import styled from 'styled-components'
import { Colors } from 'constants/colors'
import { Table as TableBase } from 'antd'

export const TableWrapper = styled.div`
  margin: 0 100px;
  flex: auto;
  @media (max-width: 600px) {
    margin: 0 10px;
    }
  }
`

export const TableStyled = styled(TableBase)`
  &&& {
    & .ant-table {
      background-color: ${Colors.darkGreyTransperent};
      color: ${Colors.white};
      font-size: 18px;
      @media (max-width: 600px) {
        font-size: 14px;
        }
      }
    }
    &&& .ant-table-tbody > tr > td {
      @media (max-width: 450px) {
        padding: 6px;
        }
      }
    }
    & .ant-table-thead .ant-table-cell {
      background-color: ${Colors.darkGrey};
      color: ${Colors.white};
      font-size: 18px;
      @media (max-width: 600px) {
        font-size: 14px;
        }
      }
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
export const ApiLink = styled.div`
  @media (max-width: 450px) {
    width: 90px;
    }
  }
`