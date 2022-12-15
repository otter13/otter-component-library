import React from 'react';
import withIcon from './withIcon';

const IconDiscountOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.815 9.373c0 1.346-1.08 2.441-2.408 2.441C8.08 11.814 7 10.72 7 9.373 7 8.027 8.08 6.93 9.407 6.93c1.328 0 2.408 1.096 2.408 2.442zm-1.605 0a.81.81 0 00-.803-.814.81.81 0 00-.802.814c0 .448.36.814.802.814a.81.81 0 00.803-.814zM8.934 17.33a.798.798 0 001.121-.178l6.412-8.928a.821.821 0 00-.176-1.137.794.794 0 00-1.12.178l-6.412 8.928a.822.822 0 00.175 1.137zm4.486-2.261c0 1.346 1.08 2.441 2.407 2.441s2.407-1.095 2.407-2.441c0-1.346-1.08-2.442-2.407-2.442s-2.407 1.096-2.407 2.442zm3.21 0a.81.81 0 01-.803.814.81.81 0 01-.803-.814.81.81 0 01.803-.814.81.81 0 01.802.814z"
    />
  </svg>
);

export default withIcon(IconDiscountOutlined);
