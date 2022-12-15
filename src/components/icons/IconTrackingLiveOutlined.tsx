import React from 'react';
import withIcon from './withIcon';

const IconTrackingLiveOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.5 0h-11A2.503 2.503 0 004 2.5v19C4 22.878 5.121 24 6.5 24h11c1.379 0 2.5-1.122 2.5-2.5v-19C20 1.122 18.879 0 17.5 0zM6 18V2.5a.5.5 0 01.5-.5h11a.5.5 0 01.5.5V18H6zm4 4v-2h4v2h-4zm3-16.249V4h-2v1.751A3.406 3.406 0 008.75 8H7v2h1.75A3.405 3.405 0 0011 12.25V14h2v-1.75A3.405 3.405 0 0015.25 10H17V8h-1.75A3.406 3.406 0 0013 5.751zm-1 5.166A1.92 1.92 0 0110.083 9c0-1.056.86-1.916 1.917-1.916s1.917.86 1.917 1.916A1.92 1.92 0 0112 10.917zM11 9a1 1 0 112 0 1 1 0 01-2 0z"
    />
  </svg>
);

export default withIcon(IconTrackingLiveOutlined);
