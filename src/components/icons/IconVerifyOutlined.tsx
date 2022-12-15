import React from 'react';
import withIcon from './withIcon';

const IconVerifyOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.564 0H19.55L24 4.58V24H4.564v-1.76l1.944-2V22h15.548V6H18.17V2H6.508v1.94c-.71.36-1.36.82-1.944 1.36V0zm12.634 12c0 3.859-3.052 7-6.803 7a6.63 6.63 0 01-4.066-1.401l-4.955 5.098L0 21.283l4.955-5.098A7.09 7.09 0 013.593 12c0-3.859 3.051-7 6.802-7 3.751 0 6.803 3.141 6.803 7zm-6.803-5c2.68 0 4.86 2.243 4.86 5s-2.18 5-4.86 5c-2.679 0-4.859-2.243-4.859-5s2.18-5 4.86-5zm.08 7.707a.955.955 0 01-1.374 0l-2.114-2.175 1.374-1.414 1.427 1.468 2.835-2.918 1.375 1.414-3.523 3.625z"
    />
  </svg>
);

export default withIcon(IconVerifyOutlined);
