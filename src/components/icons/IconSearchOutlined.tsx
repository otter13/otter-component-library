import React from 'react';
import withIcon from './withIcon';

const IconSearchOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.21 0c5.636 0 10.208 4.501 10.208 10.062 0 2.293-.789 4.463-2.205 6.223l5.362 5.278c.567.56.567 1.476 0 2.02a1.442 1.442 0 01-2.025.002l-5.422-5.336a10.254 10.254 0 01-5.919 1.867C4.574 20.116 0 15.616 0 10.062 0 4.502 4.573 0 10.21 0zM2.873 10.062c0 3.977 3.28 7.202 7.335 7.202s7.336-3.225 7.336-7.202c0-3.979-3.282-7.21-7.336-7.21-4.053 0-7.335 3.231-7.335 7.21z"
    />
  </svg>
);

export default withIcon(IconSearchOutlined);
