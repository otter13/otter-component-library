import React from 'react';
import withIcon from './withIcon';

const IconTransitCoverFilled = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.846 18.323V1.833h5.539v4.58h7.384v-4.58h5.539v7.492l.84.826.037.046c.24.265.692.595.969.742V0H0v20.155h11.418a5.395 5.395 0 01-.341-1.832h-9.23zm20.308-5.497c-.724 0-1.87-.879-2.35-1.413l-1.362-1.341-1.366 1.419c-.402.453-1.58 1.335-2.307 1.335h-1.846v5.413c0 3.104 3.976 5.056 4.774 5.416l.765.345.764-.345c.797-.36 4.774-2.312 4.774-5.416v-5.413h-1.846zm-11.077-.916v1.832H3.692V11.91h7.385zm-7.385 4.58h5.539v-1.832H3.692v1.833zm13.846 0v-1.832h1.847v1.832h1.846v1.833h-1.846v1.832h-1.847v-1.832h-1.846V16.49h1.846z"
    />
  </svg>
);

export default withIcon(IconTransitCoverFilled);
