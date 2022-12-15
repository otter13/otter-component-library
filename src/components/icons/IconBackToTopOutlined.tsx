import React from 'react';
import withIcon from './withIcon';

const IconBackToTopOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zM6.361 11.293l4.932-4.932a.999.999 0 011.414 0l4.932 4.932-1.414 1.414L13 9.482V18h-2V9.482l-3.225 3.225-1.414-1.414z"
    />
  </svg>
);

export default withIcon(IconBackToTopOutlined);
