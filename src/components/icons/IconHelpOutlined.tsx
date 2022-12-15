import React from 'react';
import withIcon from './withIcon';

const IconHelpOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 6.071c-2.206 0-4 1.93-4 3.93h2c0-1 .897-1.93 2-1.93 1.065 0 2 .833 2 1.822 0 .862-.63 1.587-1.533 1.788A1.88 1.88 0 0011 13.512V15h2v-1.408c1.771-.438 3-1.925 3-3.699 0-2.09-1.832-3.822-4-3.822zM10.5 17.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 12C0 5.383 5.383 0 12 0s12 5.383 12 12-5.383 12-12 12S0 18.617 0 12zm2 0c0 5.514 4.486 10 10 10s10-4.486 10-10S17.514 2 12 2 2 6.486 2 12z"
    />
  </svg>
);

export default withIcon(IconHelpOutlined);
