import React from 'react';
import withIcon from './withIcon';

const IconFullscreenCircleFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm-3.586-7H11v2H6a1 1 0 01-1-1v-5h2v2.586l3.293-3.293 1.414 1.414L8.414 17zm5.293-5.293L17 8.414V11h2V6a1 1 0 00-1-1h-5v2h2.586l-3.293 3.293 1.414 1.414z"
    />
  </svg>
);

export default withIcon(IconFullscreenCircleFilled);
