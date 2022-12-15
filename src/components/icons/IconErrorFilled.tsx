import React from 'react';
import withIcon from './withIcon';

const IconErrorFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 12c0 6.627-5.373 12-12 12-6.628 0-12-5.373-12-12S5.372 0 12 0c6.627 0 12 5.373 12 12zm-7.133 4.033a.454.454 0 000-.643L13.477 12l3.39-3.39a.454.454 0 000-.643l-.834-.834a.455.455 0 00-.643 0L12 10.523l-3.39-3.39a.455.455 0 00-.643 0l-.834.834a.455.455 0 000 .643l3.39 3.39-3.39 3.39a.455.455 0 000 .643l.834.834a.455.455 0 00.643 0l3.39-3.39 3.39 3.39a.455.455 0 00.643 0l.834-.834z"
    />
  </svg>
);

export default withIcon(IconErrorFilled);
