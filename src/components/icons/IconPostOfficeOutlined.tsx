import React from 'react';
import withIcon from './withIcon';

const IconPostOfficeOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.76 16.333h5.76v5.75h1.92V24H1.92V8.667h-.905a1.01 1.01 0 01-.81-1.617l3.273-5.543c.24-.32.617-.507 1.016-.507h14.052c.4 0 .776.188 1.016.507l3.273 5.543a1.01 1.01 0 01-.81 1.617h-.905v2.875H19.2V8.667H3.84v13.416h1.92v-5.75zM24 24v-8.146a2.4 2.4 0 00-2.4-2.396h-3.84a2.4 2.4 0 00-2.4 2.396V24h1.92v-1.917h4.8V24H24zm-6.72-3.833h4.8v-4.313a.481.481 0 00-.48-.479h-3.84a.48.48 0 00-.48.48v4.312zM9.6 22.083H7.68V18.25H9.6v3.833zm1.92-19.166c1.06 0 1.92.858 1.92 1.916a1.92 1.92 0 01-1.92 1.917c-1.06 0-1.92-.859-1.92-1.917s.86-1.916 1.92-1.916zm9.6 15.333h-2.88v-1.917h2.88v1.917z"
    />
  </svg>
);

export default withIcon(IconPostOfficeOutlined);
