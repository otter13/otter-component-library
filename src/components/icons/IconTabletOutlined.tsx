import React from 'react';
import withIcon from './withIcon';

const IconTabletOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 17H5V3.5a.5.5 0 01.5-.5h13a.5.5 0 01.5.5V17zm-9 4h4v-2h-4v2zm8.5-20h-13A2.503 2.503 0 003 3.5v17C3 21.879 4.122 23 5.5 23h13c1.378 0 2.5-1.121 2.5-2.5v-17C21 2.121 19.878 1 18.5 1z"
    />
  </svg>
);

export default withIcon(IconTabletOutlined);
