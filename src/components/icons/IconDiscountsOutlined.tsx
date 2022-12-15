import React from 'react';
import withIcon from './withIcon';

const IconDiscountsOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21 21.5a.5.5 0 01-.5.5H13v-9h8v8.5zm-18 0V13h8v9H3.5a.5.5 0 01-.5-.5zM2 11h9V8H2v3zm4-6.5C6 3.808 6.426 3 7.625 3c2.364 0 3.089 1.683 3.296 3H7.625C6.426 6 6 5.192 6 4.5zM16.375 3C17.574 3 18 3.808 18 4.5S17.574 6 16.375 6h-3.296c.207-1.317.932-3 3.296-3zM13 11h9V8h-9v3zm11-5h-4.339c.216-.473.339-.984.339-1.5C20 2.761 18.755 1 16.375 1 14.223 1 12.83 1.954 12 3.266 11.17 1.954 9.777 1 7.625 1 5.245 1 4 2.761 4 4.5c0 .516.123 1.027.339 1.5H0v7h1v8.5C1 22.879 2.122 24 3.5 24h17c1.378 0 2.5-1.121 2.5-2.5V13h1V6z"
    />
  </svg>
);

export default withIcon(IconDiscountsOutlined);
