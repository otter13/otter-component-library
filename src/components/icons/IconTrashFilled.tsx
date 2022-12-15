import React from 'react';
import withIcon from './withIcon';

const IconTrashFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.27 4H23v2h-2v15.5a2.5 2.5 0 01-2.5 2.5h-13A2.5 2.5 0 013 21.5V6H1V4h6.76l.64-2.41A2.48 2.48 0 0110.73 0h2.61a2.48 2.48 0 012.33 1.59v.11l.6 2.3zm-5.58-2a.5.5 0 00-.45.28L9.79 4h4.41l-.45-1.72A.5.5 0 0013.3 2h-2.61zM8 9h2v10H8V9zm8 0h-2v10h2V9z"
    />
  </svg>
);

export default withIcon(IconTrashFilled);
