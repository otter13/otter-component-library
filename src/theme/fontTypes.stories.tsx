import React from 'react';
import styled from 'styled-components';

import { theme } from '../theme';

const FontTypeContainer = styled.div<{ fontType: string }>`
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${theme.fontSizes.fontBodyLarge}px;
  font-family: ${(props) => props.fontType};
`;

export const fontTypes = () => (
  <>
    <FontTypeContainer fontType={theme.fontTypes.APTypeProDisplayMedium}>APTypeProDisplayMedium</FontTypeContainer>
    <FontTypeContainer fontType={theme.fontTypes.APTypeProTextBold}>APTypeProTextBold</FontTypeContainer>
    <FontTypeContainer fontType={theme.fontTypes.APTypeProTextMedium}>APTypeProTextMedium</FontTypeContainer>
    <FontTypeContainer fontType={theme.fontTypes.APTypeProTextRegular}>APTypeProTextRegular</FontTypeContainer>
  </>
);

export default {
  title: 'Theme/Font Types',
};
