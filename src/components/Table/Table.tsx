import React from 'react'
import { TTableData } from 'types'
import { TableStyled, TableWrapper } from './Table.styles'
import { Link } from 'react-router-dom'
import { OpenButton } from 'components/Buttons'

type Props = {
  data: TTableData[]
}

const columns = [
  {
    title: '№',
    dataIndex: 'number',
    key: 1,
    render: (t: string, d: any, i: number) => <p>{i + 1}</p>,
  },
  {
    title: 'Name',
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
      <Link to={'/' + d.title}>
        <OpenButton />
      </Link>
    ),
  },
]

export const Table: React.FC<Props> = ({ data }) => {
  return (
    <TableWrapper>
      <TableStyled dataSource={data} columns={columns} />
    </TableWrapper>
  )
}
