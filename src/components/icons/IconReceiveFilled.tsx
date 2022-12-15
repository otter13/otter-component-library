import React from 'react';
import withIcon from './withIcon';

const IconReceiveFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 23" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.965 1.962V15.7H8.84a8.056 8.056 0 000 1.962H0V0h21.611v8.772a8.528 8.528 0 00-1.965-.707V1.962H1.965zM17.682 7.85H13.753V3.925h3.929V7.85zm-6.876 1.963H3.929V7.849h6.877v1.963zm-6.877 2.943h4.912v-1.962H3.929v1.962zM17.4 9.812c-3.64 0-6.593 2.967-6.593 6.603A6.59 6.59 0 0017.398 23C21.038 23 24 20.041 24 16.406c0-3.635-2.962-6.594-6.602-6.594zm-1.703 5.605l1.156 1.166 2.23-2.25 1.375 1.388-2.917 2.943a.966.966 0 01-1.375 0l-1.845-1.86 1.376-1.387z"
    />
  </svg>
);

export default withIcon(IconReceiveFilled);
