import styled from 'styled-components'
import { Colors } from 'constants/colors'
import { Dropdown as DropdownBase } from 'antd'

export const DropdownStyled = styled(DropdownBase)`
  &&& {
    display: flex;
    align-items: center;
    color: ${Colors.yellow};
    background-color: transparent;
    border-color: ${Colors.yellow};
    font-size: 22px;
    :hover {
      cursor: pointer;
    }
    }
  }
`
