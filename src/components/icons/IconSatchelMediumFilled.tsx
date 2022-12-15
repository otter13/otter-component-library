import React from 'react';
import withIcon from './withIcon';

const IconSatchelMediumFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 22h22V2H1v20zM14.143 8l-1.987 5.815L10.158 8H7v8h2V9.846L11.275 16h1.684L15 9.796V16h2V8h-2.857z"
    />
  </svg>
);

export default withIcon(IconSatchelMediumFilled);
