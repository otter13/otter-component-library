import React from 'react';
import withIcon from './withIcon';

const IconMailExpressFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.5 3c.83 0 1.5.67 1.5 1.5l-12 9.25L0 4.5C0 3.67.67 3 1.5 3h21zm-9.968 13.375c.1-.038.195-.076.286-.137.012-.007.025-.012.038-.017a.157.157 0 00.043-.021L24 7.864v3.863h-4.364v2.182H24v2.182h-6.546v2.182H24V19.5a1.5 1.5 0 01-1.5 1.5h-21A1.5 1.5 0 010 19.5V7.713l11.089 8.48c.014.01.03.016.045.022.014.005.027.01.04.018.083.057.172.093.264.13l.01.004.031.014c.077.031.152.062.232.078.08.015.157.016.236.016H12.02c.088.001.173.002.26-.015.07-.013.136-.04.203-.066l.049-.019z"
    />
  </svg>
);

export default withIcon(IconMailExpressFilled);
