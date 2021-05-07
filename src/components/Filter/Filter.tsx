import React from 'react';
import 'antd/dist/antd.css';
import { DropdownStyled } from './Filter.styles';
import { Menu } from 'antd';
import { FilterOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const menu = (
  <Menu>
    <SubMenu title="Climate">
      <Menu.Item>arid</Menu.Item>
      <Menu.Item>temperate</Menu.Item>
      <Menu.Item>tropical</Menu.Item>
    </SubMenu>
    <SubMenu title="Terrain">
      <Menu.Item>jungle</Menu.Item>
      <Menu.Item>rainforests</Menu.Item>
      <Menu.Item>grasslands</Menu.Item>
    </SubMenu>
  </Menu>
);

export const Filter = () => {
  return (
    <DropdownStyled overlay={menu}>
      <FilterOutlined />
    </DropdownStyled>
  );
};
