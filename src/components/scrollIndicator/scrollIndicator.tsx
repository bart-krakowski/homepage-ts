import React, { useRef, FC } from 'react'

import { Wrapper, ScrollBar as StyledScrollBar} from './scrollIndicator.styled'
import { useScrollBar } from '@hooks'

export const ScrollIndicator: FC = () => {
  const scrollBarEl = useRef(null)
  const scrollBarWrapperEl = useRef(null)

  const { scrollbarHeight } = useScrollBar(scrollBarEl, scrollBarWrapperEl)

  return (
    <Wrapper ref={scrollBarWrapperEl}>
      <StyledScrollBar height={scrollbarHeight} ref={scrollBarEl} />
    </Wrapper>
  )
}
