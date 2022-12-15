import * as colors from './colors';
import * as spaces from './spaces';
import * as shadows from './shadows';
import * as borders from './borders';
import * as fontSizes from './fontSizes';
import * as fontTypes from './fontTypes';
import * as zIndex from './zIndex';
import * as formSizes from './formSizes';

export interface Theme {
  colors: typeof colors;
  spaces: typeof spaces;
  shadows: typeof shadows;
  borders: typeof borders;
  fontSizes: typeof fontSizes;
  fontTypes: typeof fontTypes;
  focusOutline: string;
  zIndex: typeof zIndex;
  formSizes: typeof formSizes;
}

export const theme: Theme = {
  colors,
  spaces,
  shadows,
  borders,
  fontSizes,
  fontTypes,
  zIndex,
  focusOutline: `
    outline: 1px dotted ${colors.ink};
    outline-offset: 3px;
  `,
  formSizes,
};
