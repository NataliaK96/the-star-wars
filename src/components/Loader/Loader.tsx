import React from 'react';
import { Wrapper, Spin } from './Loader.styles';

export const Loader = () => {
  return (
    <Wrapper>
      <Spin size="large" />
    </Wrapper>
  );
};
