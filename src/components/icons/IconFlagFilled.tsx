import React from 'react';
import withIcon from './withIcon';

const IconFlagFilled = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0.000231181 14L0.000231724 1.1C0.000231749 0.492486 0.494812 -2.54488e-08 1.10491 0L22.872 9.07968e-07C23.8292 9.47895e-07 24.3334 1.12962 23.692 1.83711L19.3849 6.58784L23.7669 12.2268C24.3287 12.9497 23.8113 14 22.8933 14H0.000231181Z"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0 15H4.017V22.9C4.017 23.5075 3.52242 24 2.91232 24H1.10467C0.49458 24 0 23.5075 0 22.9V15Z"
    />
  </svg>
);

export default withIcon(IconFlagFilled);
