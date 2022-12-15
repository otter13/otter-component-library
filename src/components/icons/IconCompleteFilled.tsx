import React from 'react';
import withIcon from './withIcon';

const IconCompleteFilled = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.753.001c3.2-.045 6.242 1.12 8.555 3.34a11.925 11.925 0 013.69 8.412 11.92 11.92 0 01-3.34 8.556 11.919 11.919 0 01-8.412 3.689h-.003l-.25.002c-3.112 0-6.05-1.181-8.303-3.342a11.925 11.925 0 01-3.688-8.411 11.924 11.924 0 013.34-8.557A11.925 11.925 0 0111.752.001zM7.707 11.29L10 13.583l6.293-6.293 1.413 1.414-7 7a.997.997 0 01-1.413 0l-3-3 1.414-1.414z"
    />
  </svg>
);

export default withIcon(IconCompleteFilled);
