import React from 'react';
import withIcon from './withIcon';

const IconDiscountsFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 3.5C6 2.808 6.426 2 7.625 2c2.364 0 3.089 1.683 3.296 3H7.625C6.426 5 6 4.192 6 3.5zM16.375 2C17.574 2 18 2.808 18 3.5S17.574 5 16.375 5h-3.296c.207-1.317.932-3 3.296-3zM24 5h-4.339c.216-.473.339-.984.339-1.5C20 1.761 18.755 0 16.375 0 14.223 0 12.83.954 12 2.266 11.17.954 9.777 0 7.625 0 5.245 0 4 1.761 4 3.5c0 .516.123 1.027.339 1.5H0v5h11V5h2v5h11V5zm-1 7H13v11h7.5c1.378 0 2.5-1.121 2.5-2.5V12zm-12 0H1v8.5C1 21.879 2.122 23 3.5 23H11V12z"
    />
  </svg>
);

export default withIcon(IconDiscountsFilled);
