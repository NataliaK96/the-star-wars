import React from 'react';
import { TCardData } from 'types';
import { InfoTitle, InfoValue, Row } from './CardListInfo.styles';

type Props = {
  data: {
    title: string;
    value: string;
  }[];
};

export const CardListInfo: React.FC<Props> = ({ data }) => {
  return (
    <>
      {data.map((i) => (
        <Row>
          <InfoTitle>{i.title}</InfoTitle>
          <InfoValue>{i.value}</InfoValue>
        </Row>
      ))}
    </>
  );
};
