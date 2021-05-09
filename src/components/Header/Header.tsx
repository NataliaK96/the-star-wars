import React from 'react'
import { Wrapper, Logo, Column, MusicWrapper } from './Header.styles'
import starWarsLogo from 'assets/images/Star_Wars_Logo.png'
import { Music } from 'components/Music'

export const Header = () => {
  return (
    <Wrapper>
      <Column />
      <Column>
        <Logo src={starWarsLogo} />
      </Column>
      <Column>
        <MusicWrapper>
          <Music />
        </MusicWrapper>
      </Column>
    </Wrapper>
  )
}
