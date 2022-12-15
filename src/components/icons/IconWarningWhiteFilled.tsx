import React from 'react';
import withIcon from './withIcon';

const IconWarningWhiteFilled = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 0C18.627 0 24 5.373 24 12C24 18.6285 18.627 24 12 24C5.373 24 0 18.6285 0 12C0 5.373 5.373 0 12 0Z"
      fill="#EDA51F"
    />
    <path
      d="M12 15C11.1705 15 10.5 14.3295 10.5 13.5V6C10.5 5.1705 11.1705 4.5 12 4.5C12.8295 4.5 13.5 5.1705 13.5 6V13.5C13.5 14.3295 12.8295 15 12 15Z"
      fill="white"
    />
    <path
      d="M13.554 18C13.554 18.8445 12.87 19.527 12.027 19.527C11.184 19.527 10.5 18.8445 10.5 18C10.5 17.157 11.184 16.473 12.027 16.473C12.87 16.473 13.554 17.157 13.554 18Z"
      fill="white"
    />
  </svg>
);

export default withIcon(IconWarningWhiteFilled);
