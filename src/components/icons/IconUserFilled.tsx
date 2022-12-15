import React from 'react';
import withIcon from './withIcon';

const IconUserFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12.5 12C8.7 12 7 8.987 7 6c0-4.145 2.762-6 5.5-6C16.3 0 18 3.013 18 6c0 4.145-2.762 6-5.5 6zM0 23.021V24h24v-.979c0-2.967-1.081-5.609-3.045-7.44C18.545 13.336 14.31 13 12 13c-2.31 0-6.545.335-8.955 2.582C1.08 17.412 0 20.054 0 23.022z" />
  </svg>
);

export default withIcon(IconUserFilled);
