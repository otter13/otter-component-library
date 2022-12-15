import React from 'react';
import withIcon from './withIcon';

const IconFeatureFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.973 17.28l7.067 5.89V2.4c0-1.323-1.076-2.4-2.4-2.4H0v14.88c0 1.323 1.076 2.4 2.4 2.4h13.572zM12.84 6.8l-1.32-2.96-1.32 3-3.228.3L9.38 9.3l-.67 3.18 2.81-1.6 2.81 1.6-.71-3.2 2.447-2.14-3.227-.34z"
    />
  </svg>
);

export default withIcon(IconFeatureFilled);
