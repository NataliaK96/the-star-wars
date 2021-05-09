import React from 'react';
import { PaginationStyled } from './Paginator.styles';

type Props = {
  total: number;
  current: number;
  onChange: (page: number, pageSize?: number) => void;
};

export const Paginator: React.FC<Props> = ({ total, onChange, current }) => {
  return (
    <PaginationStyled
      current={current}
      onChange={onChange}
      total={total}
      size="small"
      showSizeChanger={false}
    />
  );
};
