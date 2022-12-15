import React from 'react';
import withIcon from './withIcon';

const IconArrowRightFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M15.2763 21.437L23.44 13.3466C24.1867 12.601 24.1867 11.3955 23.44 10.6498L15.2763 2.55949C14.5216 1.81383 13.3025 1.81383 12.5478 2.55949C11.7991 3.30516 11.7991 4.51861 12.5478 5.26627L17.3202 10.0081L2.00188 10.0081C0.89484 10.0081 9.70088e-07 10.9037 8.73617e-07 12.0072C7.76971e-07 13.1127 0.89484 14.0063 2.00188 14.0063L17.3523 14.0063L12.5478 18.7522C11.7991 19.4979 11.7991 20.6993 12.5478 21.445C13.3025 22.1906 14.5216 22.1826 15.2763 21.437Z"
      clipRule="evenodd"
      fillRule="evenodd"
    />
  </svg>
);

export default withIcon(IconArrowRightFilled);
