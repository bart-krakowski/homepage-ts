import { graphql, useStaticQuery } from 'gatsby';

import { SiteMetadata } from '@context/site-metadata';

interface SiteMetadataResult {
  site: {
    siteMetadata: SiteMetadata;
  };
}

export const useSiteMetadata = (): SiteMetadata => {
  const { site } = useStaticQuery<SiteMetadataResult>(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  return site.siteMetadata;
};
