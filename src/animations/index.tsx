import { keyframes } from 'styled-components';

export const fade = (opacityFrom: number, opacityTo: number) => keyframes`
  from {
    opacity: ${opacityFrom};
  }

  to {
    opacity: ${opacityTo};
  }
`;

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(359deg);
  }
`;
