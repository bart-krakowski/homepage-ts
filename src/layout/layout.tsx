import React, { FC } from 'react'

import { Theme } from '@themes'
import { AvailableThemes } from '@themes/available-themes'

import { Footer } from '@components/footer'
import { Header } from '@components/header'

export const Layout: FC = ({ children }) => {

  return (
    <Theme theme={AvailableThemes.Dark}>
      <Header />
        <main>{children}</main>
      <Footer />
    </Theme>
  )
}
