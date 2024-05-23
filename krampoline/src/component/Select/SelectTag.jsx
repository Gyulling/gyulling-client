import React from 'react';
import styled from 'styled-components';
import { INTEREST_CATEGORY } from '../../constants/selectCategory';

const SelectTag = () => {
  return (
    <SelectTagWrapper>
      {INTEREST_CATEGORY.map((data, idx) => {
        const { img, desc } = data;

        return (
          <DataWrapper key={idx}>
            <DataImg>{img}</DataImg>
            <DataDesc>{desc}</DataDesc>
          </DataWrapper>
        );
      })}
    </SelectTagWrapper>
  );
};

export default SelectTag;

const SelectTagWrapper = styled.article`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);

  height: calc(100dvh - 33.5rem);
  margin: 0 2.8rem 3.2rem;
  overflow-y: auto;

  gap: 2.4rem 2.7rem;
`;

const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.2rem;
`;

const DataImg = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 2.8rem;
  border-radius: 10rem;

  ${({ theme }) => theme.fonts.h2};
  background-color: ${({ theme }) => theme.colors.gray200};
`;

const DataDesc = styled.p`
  text-align: center;
  ${({ theme }) => theme.fonts.h6_Semibold};
  color: ${({ theme }) => theme.colors.gray600};
`;
