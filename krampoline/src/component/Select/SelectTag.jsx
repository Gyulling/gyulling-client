import React from 'react';
import styled from 'styled-components';

const SelectTag = () => {
  return <SelectTagWrapper>으아아아아ㅏ</SelectTagWrapper>;
};

export default SelectTag;

const SelectTagWrapper = styled.article`
  width: 100%;
  height: calc(100dvh - 24.4rem);
  background-color: ${({ theme }) => theme.colors.prime};
`;
