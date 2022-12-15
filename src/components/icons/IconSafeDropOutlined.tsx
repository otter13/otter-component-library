import React from 'react';
import withIcon from './withIcon';

const IconSafeDropOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.867 3.91v17.18h13.77L17.515 23H0V2h21.473v10.5h-1.867V3.91h-5.602v4.772H7.469V3.909H1.867zm10.27 2.863H9.336V3.909h2.8v2.864zm-.934 9.545V14.41H3.734v1.91h7.47zm-1.867 2.864H3.734v-1.91h5.602v1.91zm9.062-5.448l-1.32 1.35 2.801 2.864a.92.92 0 001.32 0L24 15.084l-1.32-1.35-2.14 2.19-2.142-2.19zm0 4.773l2.141 2.189 2.14-2.189L24 19.857l-2.8 2.863a.92.92 0 01-1.32 0l-2.802-2.863 1.32-1.35z"
    />
  </svg>
);

export default withIcon(IconSafeDropOutlined);
