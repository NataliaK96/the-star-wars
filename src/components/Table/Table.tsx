import React from 'react';
//import { Table as TableBase } from 'antd';
import { NavLink } from 'react-router-dom';
import { TTableData } from 'types';
import { TableStyled, TableBlock } from './Table.styles';

type Props = {
  data: TTableData[];
};

const columns = [
  {
    title: '№',
    dataIndex: 'number',
    key: 1,
    render: (t: string, d: any, i: number) => <p>{i + 1}</p>,
  },
  {
    title: 'Название',
    dataIndex: 'name',
    key: 2,
    render: (t: string, d: any, i: number) => <p>{d.title}</p>,
  },
  {
    title: 'API',
    dataIndex: 'api',
    key: 3,
    render: (t: string, d: any, i: number) => (
      <a href={d.api} target="_blank" rel="noreferrer">
        {d.api}
      </a>
    ),
  },
  {
    title: '',
    dataIndex: 'open',
    key: 4,
    render: (t: string, d: any, i: number) => (
      <NavLink to={'/' + d.title}>open</NavLink>
    ),
  },
];

export const Table: React.FC<Props> = ({ data }) => {
  return (
    <TableBlock>
      <TableStyled
        dataSource={data}
        columns={columns}
      />
    </TableBlock>
  );
};
