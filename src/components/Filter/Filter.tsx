import React from 'react';
import 'antd/dist/antd.css';
import { DropdownStyled } from './Filter.styles';
import { Menu } from 'antd';
import { FilterOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const menu = (
  <Menu>
    <SubMenu title="Climate">
      <Menu.Item>Arid</Menu.Item>
      <Menu.Item>Temperate</Menu.Item>
      <Menu.Item>Tropical</Menu.Item>
    </SubMenu>
    <SubMenu title="Terrain">
      <Menu.Item>Jungle</Menu.Item>
      <Menu.Item>Rainforests</Menu.Item>
      <Menu.Item>Grasslands</Menu.Item>
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
