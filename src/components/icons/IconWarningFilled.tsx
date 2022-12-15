import React from 'react';
import withIcon from './withIcon';

const IconWarningFilled = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.646 18.818L13.95 2.157C13.528 1.432 12.8 1 12 1c-.798 0-1.526.432-1.948 1.157L.353 18.818a2.614 2.614 0 00.01 2.642c.422.713 1.147 1.14 1.94 1.14h19.395c.791 0 1.516-.427 1.938-1.14.481-.814.485-1.826.01-2.642zM11 13.763h2v-5.89h-2v5.89zm-.5 3.437c0-.814.671-1.473 1.5-1.473s1.5.659 1.5 1.473c0 .814-.671 1.472-1.5 1.472s-1.5-.659-1.5-1.472z"
    />
  </svg>
);

export default withIcon(IconWarningFilled);
