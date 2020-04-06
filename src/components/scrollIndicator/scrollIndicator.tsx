import React, { useRef, FC } from 'react'

import { Wrapper, ScrollBar as StyledScrollBar} from './scrollIndicator.styled'
import { useScrollBar } from '@hooks'

type ScrollBarProps = {
  height: string;
}

export const ScrollIndicator: FC<ScrollBarProps> = () => {
  const scrollBarEl = useRef(null)
  const scrollBarWrapperEl = useRef(null)

  const { scrollbarHeight } = useScrollBar(scrollBarEl, scrollBarWrapperEl)

  return (
    <Wrapper ref={scrollBarWrapperEl}>
      <StyledScrollBar height={scrollbarHeight} ref={scrollBarEl} />
    </Wrapper>
  )
}
