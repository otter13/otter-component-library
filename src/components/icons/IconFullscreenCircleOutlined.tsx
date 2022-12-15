import React from 'react';
import withIcon from './withIcon';

const IconFullscreenCircleOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0 0 5.373 0 12zm22 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-11.707.293l1.414 1.414L8.414 17H11v2H6a1 1 0 01-1-1v-5h2v2.586l3.293-3.293zM17 8.414V11h2V6a1 1 0 00-1-1h-5v2h2.586l-3.293 3.293 1.414 1.414L17 8.414z"
    />
  </svg>
);

export default withIcon(IconFullscreenCircleOutlined);
