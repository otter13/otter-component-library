import React from 'react';
import withIcon from './withIcon';

const IconFeatureOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 23.17l-7.362-5.89H2.5c-1.379 0-2.5-1.077-2.5-2.4V0h21.5C22.879 0 24 1.077 24 2.4v20.77zM2 1.92v12.96c0 .265.225.48.5.48h14.862L22 19.07V2.4a.491.491 0 00-.5-.48H2zM13.375 6.8L12 3.84l-1.375 3-3.362.3L9.771 9.3l-.699 3.18L12 10.88l2.928 1.6-.741-3.2 2.55-2.14-3.362-.34z"
    />
  </svg>
);

export default withIcon(IconFeatureOutlined);
