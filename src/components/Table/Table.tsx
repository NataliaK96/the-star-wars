import React from 'react';
import { Table as TableBase } from 'antd';
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
    render: (t: string, d: TTableData, i: number) => <p>{d.api}</p>,
  },
  {
    title: '',
    dataIndex: 'open',
    render: (t: string, d: TTableData, i: number) => <a href='#'>open</a>,
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
