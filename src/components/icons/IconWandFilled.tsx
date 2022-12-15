import React from 'react';
import withIcon from './withIcon';

const IconWandFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.454 4.848l-2.254.66.66-2.254L6.2 1l2.254.66L10.708 1l-.66 2.254.66 2.254-2.254-.66zm10.424 3.1L16.049 5.12a1 1 0 00-1.414 0l-4.243 4.243-.707.707-9.192 9.192a1 1 0 000 1.414l2.828 2.829a1 1 0 001.414 0l9.193-9.193.707-.707 4.243-4.242a1 1 0 000-1.415zm-6.364 2.122l1.414 1.414 2.828-2.829-1.414-1.414-2.828 2.829zm5.686 7.438l2.254-.66 2.254.66-.66-2.254.66-2.254-2.254.66L18.2 13l.66 2.254-.66 2.254zm0-12l2.254-.66 2.254.66-.66-2.254.66-2.254-2.254.66L18.2 1l.66 2.254-.66 2.254z"
    />
  </svg>
);

export default withIcon(IconWandFilled);
