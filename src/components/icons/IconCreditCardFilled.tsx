import React from 'react';
import withIcon from './withIcon';

const IconCreditCardFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.5 17a1.5 1.5 0 10-1.5-1.5 1.5 1.5 0 10-3.001.001A1.5 1.5 0 0017 15.5a1.5 1.5 0 001.5 1.5zM10 17H4v-2h6v2zM2.5 3h19C22.879 3 24 4.121 24 5.5v13c0 1.379-1.121 2.5-2.5 2.5h-19A2.502 2.502 0 010 18.5v-13C0 4.121 1.121 3 2.5 3zM22 7H2v3h20V7z"
    />
  </svg>
);

export default withIcon(IconCreditCardFilled);
