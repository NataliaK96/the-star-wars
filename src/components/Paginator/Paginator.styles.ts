import styled from 'styled-components'
import { Colors } from 'constants/colors'
import { Pagination } from 'antd'

export const PaginationStyled = styled(Pagination)`
  &&& {
    font-size: 20px;
    color: ${Colors.white};
    @media (max-width: 600px) {
      font-size: 14px;
      }
    }
    }
    & .ant-pagination-item-link {
      color: ${Colors.white};
      font-size: 18px;
      @media (max-width: 600px) {
        font-size: 14px;
        }
      }
    }
    & .ant-pagination-item-active {
      background-color: ${Colors.darkGrey};
      border: none;
    }
    & .ant-pagination-item a {
      color: ${Colors.white};
      font-size: 18px;
      @media (max-width: 600px) {
        font-size: 14px;
        }
      }
    }
    &&& .ant-pagination-item-ellipsis {
      color: ${Colors.white};
    }
  }
`
