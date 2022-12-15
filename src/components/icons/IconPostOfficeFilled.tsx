import React from 'react';
import withIcon from './withIcon';

const IconPostOfficeFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#icon-post-office-filled_svg__clip0)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.76 15.833h5.76v5.75h1.92V23.5H1.92V8.167h-.905a1.01 1.01 0 01-.81-1.617l3.273-5.543C3.718.687 4.095.5 4.494.5h14.052c.4 0 .776.188 1.016.507l3.273 5.543a1.01 1.01 0 01-.81 1.617h-.905v2.875H19.2V8.167H3.84v13.416h1.92v-5.75zM24 23.5v-8.146a2.4 2.4 0 00-2.4-2.396h-3.84a2.4 2.4 0 00-2.4 2.396V23.5h1.92v-1.917h4.8V23.5H24zM11.52 2.417c1.06 0 1.92.858 1.92 1.916a1.92 1.92 0 01-1.92 1.917c-1.06 0-1.92-.859-1.92-1.917s.86-1.916 1.92-1.916zm9.6 15.333h-2.88v-1.917h2.88v1.917z"
      />
    </g>
    <defs>
      <clipPath id="icon-post-office-filled_svg__clip0">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default withIcon(IconPostOfficeFilled);
