import styled from 'styled-components';

import { Caption } from './typography';
import { theme } from '../../theme';

export const HotKey = styled(Caption).attrs({ as: 'span' })`
  font-size: 12px;
  font-family: ${theme.fontTypes.APTypeProTextMedium};
  font-variant-numeric: tabular-nums;
  text-transform: uppercase;
  line-height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  width: 20px;
  max-width: 20px;
  min-width: 20px;
  height: 20px;
  border-radius: ${theme.borders.borderRadiusXSmall}px;
  background-color: #fff;
  color: ${theme.colors.ink};
  border: 1px solid ${theme.colors.ash};
`;
