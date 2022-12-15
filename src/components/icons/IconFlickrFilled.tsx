import React from 'react';
import withIcon from './withIcon';

const IconFlickrFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1 11.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm4.5 2.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
    />
  </svg>
);

export default withIcon(IconFlickrFilled);
