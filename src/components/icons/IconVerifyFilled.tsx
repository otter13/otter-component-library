import React from 'react';
import withIcon from './withIcon';

const IconVerifyFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 3.936A9 9 0 1110 21a8.963 8.963 0 01-4-.936V24h18V4.576L19.424 0H6v3.936zM18 2l4 4h-4V2z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.198 12c0 3.859-3.052 7-6.803 7a6.63 6.63 0 01-4.066-1.401l-4.955 5.098L0 21.283l4.955-5.098A7.09 7.09 0 013.593 12c0-3.859 3.051-7 6.802-7 3.751 0 6.803 3.141 6.803 7zm-6.723 2.707a.955.955 0 01-1.374 0l-2.114-2.175 1.374-1.414 1.427 1.468 2.835-2.918 1.375 1.414-3.523 3.625z"
    />
  </svg>
);

export default withIcon(IconVerifyFilled);
