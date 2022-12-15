import React from 'react';
import withIcon from './withIcon';

const IconVerifiedFilled = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21 3.13108C17.3682 3.13108 12.6636 0.391811 12.5171 0.306526L12.514 0.304699L12 0L11.486 0.304699L11.4829 0.306526C11.3364 0.391811 6.63183 3.13108 3 3.13108H2V14.0132C2 19.5393 11.202 23.6478 11.594 23.8209L12 24L12.406 23.8209C12.798 23.6478 22 19.5393 22 14.0132V3.13108H21Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.70696 13.2932L7.41399 11.0001L6 12.4142L8.99997 15.4143C9.19497 15.6093 9.45097 15.7073 9.70696 15.7073C9.96296 15.7073 10.219 15.6093 10.414 15.4143L17.4139 8.41404L15.9999 7L9.70696 13.2932Z"
      fill="white"
    />
  </svg>
);

export default withIcon(IconVerifiedFilled);
