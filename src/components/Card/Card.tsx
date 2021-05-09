import React from 'react'
import { TCardData } from 'types'
import { Info, Title, Wrapper } from './Card.styles'

type Props = TCardData

export const Card: React.FC<Props> = ({ title, children }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Info>{children}</Info>
    </Wrapper>
  )
}
