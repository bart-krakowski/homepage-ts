import styled from 'styled-components';

import { buttonSizes } from './button.model';

interface StyledButtonProps {
  readonly size: buttonSizes;
}

const sizeStyles = {
  small: `text-xs py-4 px-3`,
  default: `text-base py-4 px-4`,
  large: `text-lg py-5 px-5`,
  xlarge: `text-3xl py-5 px-5`,
};

export const StyledButton = styled.button<StyledButtonProps>`
  ${props => sizeStyles[props.size]}
`;
