import React from 'react';
import 'antd/dist/antd.css';
import { PaginationStyled } from './Paginator.styles';

export const Paginator = () => {
  return <PaginationStyled size="small" total={50} />;
};
