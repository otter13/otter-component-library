import React from 'react';
import withIcon from './withIcon';

const IconStarFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 0l4 8 8 1-6 6 2 9-8-4-8 4 2-9-6-6 8-1 4-8z" />
  </svg>
);

export default withIcon(IconStarFilled);
