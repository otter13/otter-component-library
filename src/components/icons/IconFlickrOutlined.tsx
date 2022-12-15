import React from 'react';
import withIcon from './withIcon';

const IconFlickrOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12zm2 0c0 5.523 4.477 10 10 10A10 10 0 102 12zm9-.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm4.5 2.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
    />
  </svg>
);

export default withIcon(IconFlickrOutlined);
