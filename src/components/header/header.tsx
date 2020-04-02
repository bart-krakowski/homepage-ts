import React, { FC } from 'react'

import {
  StyledHeader,
  StyledInner,
  StyledLink,
  StyledLogoText,
} from './header.styled'

export const Header: FC = () => (
  <StyledHeader>
    <StyledInner className="container">
      <StyledLogoText>
        <StyledLink to="/" data-testid="siteTitle">
        </StyledLink>
      </StyledLogoText>
    </StyledInner>
  </StyledHeader>
)
