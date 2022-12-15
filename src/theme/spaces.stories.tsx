import React from 'react';
import styled from 'styled-components';

import { theme } from '../theme';

const SpaceContainer = styled.div<{ spaceVariant: number }>`
  margin: 50px;
  display: inline-block;
`;

const SpaceBar = styled.div<{ space: number }>`
  height: ${(props) => props.space}px;
  width: 5px;
  background-color: ${theme.colors.slate};
`;

export const spaces = () =>
  Object.keys(theme.spaces).map((spaceKey) => (
    <SpaceContainer spaceVariant={theme.spaces[spaceKey]}>
      {spaceKey}
      <SpaceBar space={theme.spaces[spaceKey]} />
      {theme.spaces[spaceKey]}px
    </SpaceContainer>
  ));

export default {
  title: 'Theme/Spaces',
};
