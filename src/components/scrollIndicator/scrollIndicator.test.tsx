import { render, fireEvent } from '@testing-library/react'
import React from 'react'

import { ScrollIndicator } from '@components/scrollIndicator/scrollIndicator'

import { Theme } from '@themes'
import { AvailableThemes } from '@themes/available-themes'


const wrapWithTheme = (children: JSX.Element) => (
  <Theme theme={AvailableThemes.Dark}>
    { children }
  </Theme>
)

describe(`Scroll indicator`, () => {
  it(`should default to the "default" size when no size is passed in`, () => {
    const { container } = render(wrapWithTheme(<ScrollIndicator />))
    const component = container.firstChild

    expect(component).toHaveStyleRule('height', '150px')
    expect(component).toHaveStyleRule('width', '2px')
    expect(component).toHaveStyleRule('position', 'fixed')
    // expect(component).toHaveStyleRule('background-color', ({theme}) => theme.colors.neutral)

    // fireEvent(window, )
  })
})
