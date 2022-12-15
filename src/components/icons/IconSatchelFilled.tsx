import React from 'react';
import withIcon from './withIcon';

const IconSatchelFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M0 20V3h24v17H0zm3-3h6v-4H3v4zm19-7H2V5h20v5zm-1-1h-3V6h3v3z" />
  </svg>
);

export default withIcon(IconSatchelFilled);
