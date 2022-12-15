import React from 'react';
import withIcon from './withIcon';

const IconFaxOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 3H7v6h10V6h-3V3zm5 6h2.5c1.378 0 2.5 1.122 2.5 2.5V23H0V11.5C0 10.122 1.122 9 2.5 9H5V1h10.414l.293.293 3 3 .293.293V9zm-3.033 9c-.42 0-.759-.32-.759-.715V16.08c0-.937-2.428-1.223-3.208-1.223-.78 0-3.208.286-3.208 1.223v1.205c0 .395-.34.715-.759.715H5.758C5.34 18 5 17.68 5 17.285v-2.142c0-.95.758-1.227.758-1.227C7.413 13.333 10.13 13 12 13c1.87 0 4.587.333 6.242.916 0 0 .758.311.758 1.227v2.142c0 .395-.339.715-.758.715h-2.275z"
    />
  </svg>
);

export default withIcon(IconFaxOutlined);
