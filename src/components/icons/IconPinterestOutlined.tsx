import React from 'react';
import withIcon from './withIcon';

const IconPinterestOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a10 10 0 01-10 10zm.92-6.85c3.18.24 4.95-3.14 4.52-6.26-.39-2.76-3.18-4.17-6.15-3.89A5.28 5.28 0 006.5 9.88c0 1.64.42 2.87 2 3.22.42-.787.194-1.17-.05-1.585-.128-.218-.262-.445-.31-.745-.58-3.55 4.13-5.97 6.59-3.49 1.7 1.72.45 7-2.18 6.45-1.372-.287-.962-1.56-.553-2.83.374-1.166.748-2.328-.257-2.72-1.71-.67-2.62 2.05-1.81 3.4-.124.614-.288 1.22-.452 1.832C9.02 15.11 8.548 16.86 8.85 19c1.35-1 1.8-2.81 2.17-4.74a3.86 3.86 0 001.9.89z"
    />
  </svg>
);

export default withIcon(IconPinterestOutlined);
