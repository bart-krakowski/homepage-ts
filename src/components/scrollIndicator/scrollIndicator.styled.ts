import styled from 'styled-components'

type ScrollBarProps = {
  height: string;
}

const Wrapper = styled.div`
  position: fixed;
  top: 30px;
  right: 35px;
  z-index: 1;
  width: 2px;
  height: 150px;
  background-color: ${({ theme }) => theme.colors.neutral};
`

const ScrollBar = styled.div<ScrollBarProps>`
  width: 100%;
  height: ${({ height}) => height};
  background-color: red;
`

export { Wrapper, ScrollBar }
