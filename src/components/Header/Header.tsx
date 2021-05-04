import React from 'react';
import {HeaderMain, Logo} from './Header.styles'
import starWarsLogo from 'assets/images/Star_Wars_Logo.png'

export const Header = () => {
  return (
      <HeaderMain>
          <Logo src={starWarsLogo}/>
      </HeaderMain>
  )
};