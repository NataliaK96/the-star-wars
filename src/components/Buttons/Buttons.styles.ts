import styled from 'styled-components'
import { Colors } from 'constants/colors'
import { Button } from 'antd'

export const ButtonBase = styled(Button)`
  &&& {
    display: flex;
    align-items: center;
    color: ${Colors.yellow};
    background-color: transparent;
    border-color: ${Colors.yellow};
    font-size: 18px;
    margin-right: 20px;
    :hover {
      color: ${Colors.blue};
      border-color: ${Colors.blue};
    }
    @media (max-width: 600px) {
      font-size: 14px;
      margin: 0 8px 0 0;
      }
    }
    & .ant-dropdown-trigger .anticon.anticon-down {
      font-size: 18px;
      padding-top: 4px;
    }
  }
`

export const OpenButton = styled(ButtonBase)`
  margin-left: auto;
`
