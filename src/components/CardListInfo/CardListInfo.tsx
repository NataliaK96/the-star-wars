import React from 'react'
import { InfoTitle, InfoValue, Row } from './CardListInfo.styles'

type Props = {
  data: {
    title: string
    value: string | number
  }[]
}

export const CardListInfo: React.FC<Props> = ({ data }) => {
  return (
    <>
      {data.map((i) => (
        <Row key={i.title}>
          <InfoTitle>{i.title}</InfoTitle>
          <InfoValue>{i.value}</InfoValue>
        </Row>
      ))}
    </>
  )
}
