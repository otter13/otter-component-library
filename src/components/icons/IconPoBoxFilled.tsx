import React from 'react';
import withIcon from './withIcon';

const IconPoBoxFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 21.5c0 .28-.22.5-.5.5h-15c-.28 0-.5-.22-.5-.5v-19c0-.28.22-.5.5-.5h15c.28 0 .5.22.5.5v19zM19.5 0h-15A2.5 2.5 0 002 2.5v19A2.5 2.5 0 004.5 24h15a2.5 2.5 0 002.5-2.5v-19A2.5 2.5 0 0019.5 0zM8 15V5h8v10H8zm2-2l1.06-2.45C10.43 10.22 10 9.76 10 9c0-1.1.9-2 2-2s2 .9 2 2c0 .76-.43 1.22-1.06 1.55L14 13h-4zm7 6v-2H7v2h10z"
      fill="#292F33"
    />
  </svg>
);

export default withIcon(IconPoBoxFilled);
