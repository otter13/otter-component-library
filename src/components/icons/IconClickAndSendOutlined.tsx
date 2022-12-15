import React from 'react';
import withIcon from './withIcon';

const IconClickAndSendOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.707 9.414L8.293 8l2.298-2.298H4v-2h6.581L8.293 1.414 9.707 0l4 4a.999.999 0 010 1.414l-4 4zM4 17.702h6v-2H4v2zm0-3h8v-2H4v2zm12-3h4v-4h-4v4zm0-8v2h6V11l2-.625V3.702h-8zM12 20l-3.02 2H0V3.702h2V20h10zm12-7.298l-10 3.286 3.408 1.931-4.628 3.702 1.249 1.562 4.787-3.83 1.898 3.35 3.286-10z"
    />
  </svg>
);

export default withIcon(IconClickAndSendOutlined);
