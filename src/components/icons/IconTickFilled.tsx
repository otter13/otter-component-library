import React from 'react';
import withIcon from './withIcon';

const Tick = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M9.52302 20.4565L24 5.62357L21.4394 3L8.24271 16.5211L2.56062 10.6993L0 13.3229L6.9624 20.4565C7.30597 20.8085 7.76633 21 8.24271 21C8.7191 21 9.17945 20.8085 9.52302 20.4565Z" />
  </svg>
);

export default withIcon(Tick);
