import React from 'react';
import styled from 'styled-components';

import { theme } from '../theme';

const BorderRadiusContainer = styled.div<{ borderRadius: number }>`
  border: 1px solid ${theme.colors.primaryPostRed};
  height: 100px;
  width: 300px;
  border-radius: ${(props) => props.borderRadius}px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
`;

export const borderRadius = () => (
  <>
    {Object.keys(theme.borders).map((k) => (
      <BorderRadiusContainer borderRadius={theme.borders[k]}>
        {k}: {theme.borders[k]}px
      </BorderRadiusContainer>
    ))}
  </>
);

export default {
  title: 'Theme/Border Radius',
};
