import React, { FC } from 'react'

import { Footer } from '@components/footer'
import { Header } from '@components/header'

export const Layout: FC = ({ children }) => {

  return (
    <>
      <Header />
        <main>{children}</main>
      <Footer />
    </>
  )
}
