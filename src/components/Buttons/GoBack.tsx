import React from 'react';
import { LeftOutlined } from '@ant-design/icons';
import { ButtonBase } from './Buttons.styles';

export const GoBack = () => {
  return (
    <ButtonBase icon={<LeftOutlined />}>
      Go back
    </ButtonBase>
  );
};
