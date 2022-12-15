import { css } from 'styled-components';
import { theme } from '../theme';

export const AddFocusEdge = css`
  position: relative;

  ::before {
    content: '';
    height: 100%;
    position: absolute;
    left: -${theme.spaces.spaceXSmall}px;
    top: 0;
    border-left: ${theme.spaces.spaceXSmall}px solid transparent;
    border-radius: ${theme.borders.borderRadiusSmall}px 0 0 ${theme.borders.borderRadiusSmall}px;
  }

  &:focus-within {
    ::before {
      border-left-color: ${theme.colors.blueInfoNormal};
    }

    background: ${theme.colors.blueInfoLight};
  }
`;
