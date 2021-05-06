import React from 'react';
import 'antd/dist/antd.css';
import { LeftOutlined } from '@ant-design/icons';
import { GoBackStyled } from './Buttons.styles';

export const GoBack = () => {
  return (
    <GoBackStyled icon={<LeftOutlined />}>
      Go back
    </GoBackStyled>
  );
};
