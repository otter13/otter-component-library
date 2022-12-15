import React from 'react';
import styled from 'styled-components';

import { theme } from '../theme';
import notes from './shadows.notes.md';

const ShadowWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ShadowContainer = styled.div<{ shadowVariant: string }>`
  height: 250px;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  flex: 1 0 23%;
  align-items: center;
  justify-content: center;
  box-shadow: ${(props) => props.shadowVariant};
  margin: 50px;
  text-align: center;
`;

export const shadows = () => (
  <ShadowWrapper>
    {Object.keys(theme.shadows).map((shadow) => (
      <ShadowContainer shadowVariant={theme.shadows[shadow]}>
        box-shadow: {'${theme.shadows.' + shadow + '}'}
        <p>computes to</p> box-shadow: {theme.shadows[shadow]};
      </ShadowContainer>
    ))}
  </ShadowWrapper>
);

export default {
  title: 'Theme/Shadows',
  parameters: { notes },
};
