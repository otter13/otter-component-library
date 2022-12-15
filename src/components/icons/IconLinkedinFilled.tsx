import React from 'react';
import withIcon from './withIcon';

const IconLinkedinFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zM9.018 16.806h-2.47V8.88h2.47v7.926zM7.78 7.796c-.79 0-1.427-.644-1.427-1.428 0-.79.637-1.427 1.427-1.427s1.427.644 1.427 1.427A1.424 1.424 0 017.78 7.795zm10.466 9.01h-2.463v-3.855c0-.916-.013-2.105-1.28-2.105-1.28 0-1.476 1-1.476 2.036v3.924h-2.462V8.88h2.364v1.084h.035c.329-.622 1.133-1.28 2.33-1.28 2.497 0 2.959 1.644 2.959 3.778v4.344h-.007z"
    />
    <mask id="icon-linkedin-filled_svg__a" maskUnits="userSpaceOnUse" x={0} y={0} width={25} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zM9.018 16.806h-2.47V8.88h2.47v7.926zM7.78 7.796c-.79 0-1.427-.644-1.427-1.428 0-.79.637-1.427 1.427-1.427s1.427.644 1.427 1.427A1.424 1.424 0 017.78 7.795zm10.466 9.01h-2.463v-3.855c0-.916-.013-2.105-1.28-2.105-1.28 0-1.476 1-1.476 2.036v3.924h-2.462V8.88h2.364v1.084h.035c.329-.622 1.133-1.28 2.33-1.28 2.497 0 2.959 1.644 2.959 3.778v4.344h-.007z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#icon-linkedin-filled_svg__a)">
      <path d="M0 0h24v24H0z" />
    </g>
  </svg>
);

export default withIcon(IconLinkedinFilled);
