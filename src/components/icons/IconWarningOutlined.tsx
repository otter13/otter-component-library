import React from 'react';
import withIcon from './withIcon';

const IconWarningOutlined = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 25 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.951 1.232l9.698 17.74a2.939 2.939 0 01-.01 2.814C23.217 22.546 22.492 23 21.7 23H2.303c-.793 0-1.518-.455-1.939-1.214a2.939 2.939 0 01-.011-2.813l9.699-17.741C10.474.46 11.202 0 12.001 0c.799 0 1.528.46 1.95 1.232zM21.7 20.909c.099 0 .173-.108.209-.172a.78.78 0 00.004-.727L12.214 2.269c-.062-.113-.139-.178-.213-.178-.073 0-.151.065-.213.178L2.09 20.01a.78.78 0 00.004.727c.035.064.11.172.209.172H21.7zM11 13.591h2V7.318h-2v6.273zm-.499 3.659c0-.867.671-1.569 1.5-1.569.83 0 1.5.702 1.5 1.569 0 .866-.67 1.568-1.5 1.568-.829 0-1.5-.702-1.5-1.568z"
    />
  </svg>
);

export default withIcon(IconWarningOutlined);
