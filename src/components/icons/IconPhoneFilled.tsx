import React from 'react';
import withIcon from './withIcon';

const IconPhoneFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.558 15.43l-1.813 2.539-.762-.234a8.822 8.822 0 01-3.976-2.585l-.594-.802c-1.176-1.992-1.403-4.076-1.434-5.14l-.02-.666 2.564-1.445c.733-.411 1.073-1.343.81-2.215L8.864 0l-3.69 1.14C2.252 1.794 2.007 5.024 2 8.002a17.911 17.911 0 003.038 9.924l.082.107c2.114 2.808 4.973 4.77 8.05 5.518.785.189 1.866.449 2.956.449 1.833 0 2.972-.743 3.585-2.337l1.85-4.002-3.945-2.655c-.688-.46-1.553-.283-2.058.425z"
    />
  </svg>
);

export default withIcon(IconPhoneFilled);
