import React from 'react';
import withIcon from './withIcon';

const IconSafeDropFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.867 21.09V3.91H7.47v4.772h6.535V3.909h5.602v8.59h1.867V2H0v21h17.514l-1.876-1.91H1.868zm9.336-4.772V14.41H3.734v1.91h7.47zm-1.867 2.864H3.734v-1.91h5.602v1.91zm9.062-5.448l-1.32 1.35 2.801 2.864a.92.92 0 001.32 0L24 15.084l-1.32-1.35-2.14 2.19-2.142-2.19zm0 4.773l2.141 2.189 2.14-2.189L24 19.857l-2.8 2.863a.92.92 0 01-1.32 0l-2.802-2.863 1.32-1.35z"
    />
  </svg>
);

export default withIcon(IconSafeDropFilled);
