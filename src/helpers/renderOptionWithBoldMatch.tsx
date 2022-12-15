import React from 'react';
import styled from 'styled-components';

const BoldText = styled.span`
  font-size: 16px;
  line-height: 24px;
  font-weight: normal;
  font-family: APTypeProText-Bold, Helvetica, Arial, sans-serif;
`;

export const renderOptionWithBoldMatch = (text: string, match: string, key: string) => {
  if (match && text) {
    const parts = text.split(new RegExp(`(${match})`, 'gi'));
    return (
      <span key={key.toLowerCase()}>
        {parts.map((part: string) =>
          part.toLowerCase() === match.toLowerCase() ? <BoldText key={`${key}-${part}`}>{part}</BoldText> : part
        )}
      </span>
    );
  }
  return <span>{text}</span>;
};
