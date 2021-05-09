import styled from 'styled-components'
import { Colors } from 'constants/colors'

export const FooterBase = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  color: ${Colors.white};
  width: 100%;
  padding-left: 60px;
`
export const Link = styled.a`
  color: ${Colors.white};
  :hover {
    color: ${Colors.grey};
  }
`
