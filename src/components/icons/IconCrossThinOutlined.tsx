import React from 'react';
import withIcon from './withIcon';

const IconCrossThinOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.532 4L12 10.532 5.467 4 4 5.468 10.531 12 4 18.532 5.467 20l6.532-6.531L18.532 20 20 18.532l-6.532-6.53L20 5.467 18.532 4z"
    />
  </svg>
);

export default withIcon(IconCrossThinOutlined);
