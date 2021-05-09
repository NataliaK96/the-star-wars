import React from 'react';
import { DropdownStyled } from './Filter.styles';
import { Menu } from 'antd';
import { FilterOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

type Props = {
  climateVariants: string[];
  terrainVariants: string[];
  onFilterByClimate: (climate: string) => void;
  onFilterByTerrain: (terrain: string) => void;
  reset: () => void;
};

export const Filter: React.FC<Props> = ({
  climateVariants,
  terrainVariants,
  onFilterByClimate,
  onFilterByTerrain,
  reset,
}) => {
  const menu = (
    <Menu>
      <SubMenu title="Climate">
        {climateVariants.map((c) => (
          <Menu.Item key={c} onClick={() => onFilterByClimate(c)}>
            {c}
          </Menu.Item>
        ))}
      </SubMenu>
      <SubMenu title="Terrain">
        {terrainVariants.map((t) => (
          <Menu.Item key={t} onClick={() => onFilterByTerrain(t)}>
            {t}
          </Menu.Item>
        ))}
      </SubMenu>
      <Menu.Item onClick={reset}>Reset</Menu.Item>
    </Menu>
  );
  return (
    <DropdownStyled overlay={menu}>
      <FilterOutlined />
    </DropdownStyled>
  );
};
