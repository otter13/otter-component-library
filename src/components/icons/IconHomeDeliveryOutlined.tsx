import React from 'react';
import withIcon from './withIcon';

const IconHomeDeliveryOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 11.512L12.711.293a1.01 1.01 0 00-1.422 0L0 11.513l1.423 1.413L3 11.414V24h1.957V9.414l7.043-7 7.043 7V24H21V11.414l1.577 1.512L24 11.512zM17 22v2H7v-2h10zM12.894 9v7.576l2.248-2.288 1.389 1.414-3.93 4a.97.97 0 01-1.389 0l-3.93-4 1.39-1.414 2.257 2.298V9h1.965z"
    />
  </svg>
);

export default withIcon(IconHomeDeliveryOutlined);
