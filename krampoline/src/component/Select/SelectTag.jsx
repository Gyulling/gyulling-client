import React from 'react';
import styled from 'styled-components';

const DUMMY = [
  '바다',
  '바다',
  '바다',
  '바다',
  '바다',
  '바다',
  '바다',
  '바다',
  '바다',
  '바다',
  '바다',
  '바다',
  '바다',
  '바다',
  '바다',
  '바다',
  '바다',
  '바다',
  '바다',
  '바다',
  '바다',
  '바다',
  '바다',
  '바다',
  '바다',
  '바다',
  '바다',
  '바다',
  '바다',
  '바다',
  '바다',
  '바다',
  '바다',
  '바다',
  '바다',
  '바다',
  '바다',
  '바다',
  '바다',
  '바다',
  '바다',
  '바다',
  '바다',
  '바다',
  '바다',
  '바다',
  '바다',
  '바다',
  '바다',
  '바다',
  '바다',
  '바다',
  '바다',
  '바다',
  '바다',
  '바다',
  '바다',
  '바다',
  '바다',
  '바다',
];

const SelectTag = () => {
  return (
    <SelectTagWrapper>
      {DUMMY.map((data, idx) => {
        return <div key={idx}>{data}</div>;
      })}
    </SelectTagWrapper>
  );
};

export default SelectTag;

const SelectTagWrapper = styled.article`
  width: 100%;
  height: calc(100dvh - 24.4rem);
  margin-bottom: 1.6rem;

  overflow-y: auto;

  background-color: ${({ theme }) => theme.colors.prime};

  gap: 5rem;
`;
