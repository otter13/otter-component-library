import React from 'react';
import withIcon from './withIcon';

const IconPlusCircleOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 0c6.617 0 12 5.383 12 12s-5.383 12-12 12S0 18.617 0 12 5.383 0 12 0zm0 22c5.514 0 10-4.486 10-10S17.514 2 12 2 2 6.486 2 12s4.486 10 10 10zm-1-11V6h2v5h5v2h-5v5h-2v-5H6v-2h5z"
    />
  </svg>
);

export default withIcon(IconPlusCircleOutlined);
