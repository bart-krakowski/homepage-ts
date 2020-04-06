import { render } from '@testing-library/react'
import React from 'react'

import { ScrollIndicator } from '@components/scrollIndicator/scrollIndicator'

describe(`Scroll indicator`, () => {
  it(`should default to the "default" size when no size is passed in`, () => {
    const { container } = render(<ScrollIndicator height={'10%'} />)
    const component = container.firstChild

    expect(component).toHaveStyleRule('height', '150px')
    expect(component).toHaveStyleRule('width', '2px')
    expect(component).toHaveStyleRule('position', 'fixed')
  })
})
