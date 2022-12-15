import React from 'react';
import withIcon from './withIcon';

const IconNotesFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17 1v2H7V1H5v2H0v20h19.424L24 18.423V3h-5V1h-2zM5 11h14V9H5v2zm8 4H5v-2h8v2zm-8 4h5v-2H5v2zm18-2h-5v5l5-5z"
    />
  </svg>
);

export default withIcon(IconNotesFilled);
