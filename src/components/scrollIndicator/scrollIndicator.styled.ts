import styled from 'styled-components'

const Wrapper = styled.div`
  position: fixed;
  right: 35px;
  bottom: 30px;
  z-index: 1;
  width: 2px;
  height: 150px;
  background-color: ${({theme}) => theme.colors.neutral};
`

const ScrollBar = styled.div`
  width: 100%;
  background-color: ${({theme}) => theme.colors.background};
`

export { Wrapper, ScrollBar }
