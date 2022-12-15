import React from 'react';
import withIcon from './withIcon';

const IconArrowDownFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M2.56326 15.2763L10.6536 23.44C11.3993 24.1867 12.6047 24.1867 13.3504 23.44L21.4408 15.2763C22.1864 14.5216 22.1864 13.3025 21.4408 12.5478C20.6951 11.7991 19.4816 11.7991 18.734 12.5478L13.9921 17.3202L13.9921 2.00188C13.9921 0.894839 13.0965 4.85044e-07 11.993 4.36808e-07C10.8875 3.88485e-07 9.99391 0.894839 9.99391 2.00188L9.99391 17.3523L5.24805 12.5478C4.50239 11.7991 3.30093 11.7991 2.55527 12.5478C1.8096 13.3025 1.8176 14.5216 2.56326 15.2763Z"
      clipRule="evenodd"
      fillRule="evenodd"
    />
  </svg>
);

export default withIcon(IconArrowDownFilled);
