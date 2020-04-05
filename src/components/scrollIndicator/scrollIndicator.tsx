import React, { useRef, FC } from 'react'
import styled from 'styled-components'

import { Wrapper, ScrollBar as StyledScrollBar } from './scrollIndicator.styled'
import { useScrollBar } from '@hooks'

export const ScrollIndicator: FC = () => {
  const scrollBarEl = useRef(null)
  const scrollBarWrapperEl = useRef(null)

  // useScrollingHandler(scrollBarEl, scrollBarWrapperEl)
  const { scrollbarHeight } = useScrollBar(scrollBarEl, scrollBarWrapperEl)

  console.log('scrollbarHeight', scrollbarHeight)

  const ScrollBar = styled(StyledScrollBar)`
    height: ${scrollbarHeight};
  `

  const elements = (
    <Wrapper ref={scrollBarWrapperEl}>
      <ScrollBar ref={scrollBarEl} />
    </Wrapper>
  )

  return elements
}
