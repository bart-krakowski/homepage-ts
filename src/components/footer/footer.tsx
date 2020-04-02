import React, { FC } from 'react'

import { StyledFooter } from './footer.styled'

export const Footer: FC = () => (
  <>
    {(siteMetadata): JSX.Element => (
      <StyledFooter>
        <div data-testid="copyright">
          © {new Date().getFullYear()}, {siteMetadata.title}
        </div>
        <div>
          Website created by{' '}
          <a
            href="https://www.wildecreations.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="createdBy"
          >
            Your Company Ltd
          </a>
        </div>
      </StyledFooter>
    )}
  </>
)
