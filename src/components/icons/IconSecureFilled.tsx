import React from 'react';
import withIcon from './withIcon';

const IconSecureFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.517.307C12.664.392 17.368 3.13 21 3.13h1v10.882c0 5.526-9.202 9.635-9.594 9.808L12 24l-.406-.18C11.202 23.649 2 19.54 2 14.014V3.131h1c3.632 0 8.336-2.74 8.483-2.824l.003-.002L12 0l.514.305.003.002zM9 10.057v-2.07c0-1.56 1.374-2.877 3-2.877s3 1.318 3 2.878v2.068h1c.553 0 1 .443 1 .99v4.946c0 .547-.447.99-1 .99H8c-.553 0-1-.443-1-.99v-4.947c0-.546.447-.989 1-.989h1zm4-2.07v2.07h-2v-2.07c0-.47.477-.899 1-.899s1 .429 1 .9zm-.302 7.016a.3.3 0 00.302-.3v-2.37a.3.3 0 00-.302-.298h-1.396a.3.3 0 00-.302.299v2.37a.3.3 0 00.302.299h1.396z"
    />
  </svg>
);

export default withIcon(IconSecureFilled);
