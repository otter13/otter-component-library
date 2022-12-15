import React from 'react';
import withIcon from './withIcon';

const IconFacebookFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.228 19.059V12.62h2.16l.325-2.513h-2.485V8.506c0-.727.205-1.221 1.243-1.221h1.327V5.04a18.295 18.295 0 00-1.934-.099c-1.913 0-3.226 1.172-3.226 3.318v1.85H8.47v2.512h2.167v6.438h2.59zM12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"
    />
    <mask id="icon-facebook-filled_svg__a" maskUnits="userSpaceOnUse" x={0} y={0} width={24} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.228 19.059V12.62h2.16l.325-2.513h-2.485V8.506c0-.727.205-1.221 1.243-1.221h1.327V5.04a18.295 18.295 0 00-1.934-.099c-1.913 0-3.226 1.172-3.226 3.318v1.85H8.47v2.512h2.167v6.438h2.59zM12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#icon-facebook-filled_svg__a)">
      <path d="M0 0h24v24H0z" />
    </g>
  </svg>
);

export default withIcon(IconFacebookFilled);
