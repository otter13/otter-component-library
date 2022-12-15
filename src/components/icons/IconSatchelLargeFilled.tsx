import React from 'react';
import withIcon from './withIcon';

const IconSatchelLargeFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M0 23h24V1H0v22zM9 7v10h7v-2h-5V7H9z" />
  </svg>
);

export default withIcon(IconSatchelLargeFilled);
