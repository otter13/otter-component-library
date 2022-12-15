import React from 'react';
import withIcon from './withIcon';

const IconHelpFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 12c0 6.627 5.372 12 12 12 6.627 0 12-5.373 12-12S18.627 0 12 0C5.372 0 0 5.373 0 12zm10-2H8c0-2.235 1.87-4 4-4 2.215 0 4 1.586 4 4 0 1.649-1.072 2.895-3 3.694V15h-2v-1.306a2 2 0 011.234-1.847C13.484 11.329 14 10.728 14 10c0-1.253-.84-2-2-2-1.05 0-2 .896-2 2zm2 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
    />
  </svg>
);

export default withIcon(IconHelpFilled);
