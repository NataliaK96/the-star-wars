import React from 'react';
import { Table as TableBase } from 'antd';
import { NavLink } from 'react-router-dom';
import { TTableData } from 'types';
type Props = {
  data: TTableData[]
}

const columns = [
  {
    title: '№',
    dataIndex: 'number',
    render: (t: string, d: TTableData, i: number) => <p>{i+1}</p>,
  },
  {
    title: 'Название',
    dataIndex: 'name',
    render: (t: string, d: TTableData, i: number) => <p>{d.title}</p>,
  },
  {
    title: 'API',
    dataIndex: 'api',
    render: (t: string, d: TTableData, i: number) => <a href={d.api} target='_blank' rel="noreferrer">{d.api}</a>,
  },
  {
    title: '',
    dataIndex: 'open',
    render: (t: string, d: TTableData, i: number) => <NavLink to={'/' + d.title}>open</NavLink>,
  },
];

export const Table: React.FC<Props> = ({data}) => {
  return (
  <TableBase 
  columns={columns} 
  dataSource={data} 
  />
  )
};
