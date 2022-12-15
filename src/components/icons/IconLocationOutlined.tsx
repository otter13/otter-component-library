import React from 'react';
import withIcon from './withIcon';

const IconLocationOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 0C7.037 0 3 4.05 3 9.029c0 7.409 8.02 14.157 8.362 14.441L12 24l.638-.53C12.979 23.186 21 16.438 21 9.03 21 4.05 16.963 0 12 0zm-.001 21.355C10.163 19.65 5 14.38 5 9.029c0-3.872 3.141-7.023 7-7.023s7 3.15 7 7.023c0 5.34-5.165 10.618-7.001 12.326zM9 9.029c0-1.66 1.346-3.01 3-3.01s3 1.35 3 3.01c0 1.66-1.346 3.01-3 3.01s-3-1.35-3-3.01z"
    />
  </svg>
);

export default withIcon(IconLocationOutlined);
