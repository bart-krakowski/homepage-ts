import React, { FC } from 'react'

import { Footer } from '@components/footer'
import { Header } from '@components/header'
import { SiteMetadataContext } from '@context/site-metadata'
import { useSiteMetadata } from '@hooks'

export const Layout: FC = ({ children }) => {
  const siteMetadata = useSiteMetadata()

  return (
    <SiteMetadataContext.Provider value={siteMetadata}>
      <Header />
        <main>{children}</main>
      <Footer />
    </SiteMetadataContext.Provider>
  )
};
