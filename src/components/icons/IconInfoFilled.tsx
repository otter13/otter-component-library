import React from 'react';
import withIcon from './withIcon';

const IconInfoFilled = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 24C18.627 24 24 18.627 24 12C24 5.3715 18.627 0 12 0C5.373 0 0 5.3715 0 12C0 18.627 5.373 24 12 24ZM12 9C12.829 9 13.5 8.329 13.5 7.5C13.5 6.671 12.829 6 12 6C11.171 6 10.5 6.671 10.5 7.5C10.5 8.329 11.171 9 12 9ZM12 10C12.552 10 13 10.448 13 11V15H14V17H10V15H11V12H10V10H12Z"
    />
  </svg>
);

export default withIcon(IconInfoFilled);
