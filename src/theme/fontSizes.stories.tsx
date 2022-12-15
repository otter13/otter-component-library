import React from 'react';
import styled from 'styled-components';

import { theme } from '../theme';

const FontSizeContainer = styled.div<{ fontSize: number }>`
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => props.fontSize}px;
`;

export const bodyFontSizes = () => (
  <>
    <FontSizeContainer fontSize={theme.fontSizes.fontBodyXSmall}>fontBodyXSmall: 10px</FontSizeContainer>
    <FontSizeContainer fontSize={theme.fontSizes.fontBodySmall}>fontBodySmall: 12px</FontSizeContainer>
    <FontSizeContainer fontSize={theme.fontSizes.fontBodyDefault}>fontBodyDefault: 14px</FontSizeContainer>
    <FontSizeContainer fontSize={theme.fontSizes.fontBodyMedium}>fontBodyMedium: 16px</FontSizeContainer>
    <FontSizeContainer fontSize={theme.fontSizes.fontBodyLarge}>fontBodyLarge: 18px</FontSizeContainer>
  </>
);

export default {
  title: 'Theme/Font Sizes',
};
