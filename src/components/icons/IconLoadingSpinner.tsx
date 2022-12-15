import React from 'react';
import { rotate } from '../../animations';
import styled from 'styled-components';

const IconLoadingSpinner = styled.div<{ height?: string; width?: string; borderWidth?: string; fill?: string }>`
  animation: ${rotate} 1s linear infinite;
  border: solid ${({ borderWidth }) => borderWidth || 3}px ${({ fill }) => fill || 'currentColor'};
  border-right-color: transparent;
  border-radius: 50%;
  height: ${({ height }) => (height ? `${height}px` : `1em`)};
  width: ${({ width }) => (width ? `${width}px` : `1em`)};
`;

export default IconLoadingSpinner;
