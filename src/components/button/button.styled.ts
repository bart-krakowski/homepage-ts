import styled from 'styled-components'

import { buttonSizes } from './button.model'

interface StyledButtonProps {
  readonly size: buttonSizes;
}

const sizeStyles = {
  small: `1rem`,
  default: `2rem`,
  large: `3rem`,
  xlarge: `4rem`,
}

export const StyledButton = styled.button<StyledButtonProps>`
  font-size: ${props => sizeStyles[props.size]}
`
