import React from 'react';
import withIcon from './withIcon';

const IconProfileVerifiedOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 5c0 2.489 1.391 5 4.5 5 2.24 0 4.5-1.546 4.5-5 0-2.489-1.391-5-4.5-5C7.26 0 5 1.546 5 5zm12 19a7 7 0 01-7-7 7 7 0 017-7 7 7 0 017 7 7 7 0 01-7 7zm0-2c2.757 0 5-2.243 5-5s-2.243-5-5-5-5 2.243-5 5 2.243 5 5 5zm-1-4.414l3.293-3.293 1.414 1.414-4 4a1 1 0 01-1.414 0l-2-2 1.414-1.414L16 17.586zM0 19.939h7.642a9.432 9.432 0 01-.527-1.957H2.142c.188-1.351.764-2.503 1.675-3.347.714-.66 2.006-1.092 3.71-1.262a9.464 9.464 0 011.046-2.11c-1.833.068-4.558.447-6.209 1.975C.839 14.648 0 16.68 0 18.961v.978zM9.5 2C7.981 2 7 3.178 7 5s.981 3 2.5 3C11.019 8 12 6.822 12 5s-.981-3-2.5-3z"
    />
  </svg>
);

export default withIcon(IconProfileVerifiedOutlined);
