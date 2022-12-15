import React from 'react';
import withIcon from './withIcon';

const IconLocationFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 9.029C3 4.05 7.037 0 12 0c4.962 0 9 4.05 9 9.029 0 7.409-8.021 14.157-8.362 14.441L12 24l-.638-.53C11.021 23.186 3 16.438 3 9.03zM9 9c0-1.655 1.345-3 3-3 1.654 0 3 1.345 3 3s-1.346 3-3 3c-1.655 0-3-1.345-3-3z"
    />
  </svg>
);

export default withIcon(IconLocationFilled);
