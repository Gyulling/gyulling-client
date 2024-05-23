import React from 'react';
import styled from 'styled-components';

const INTEREST_CATEGORY = [
  { img: '🗑️', desc: '플라스틱 오염' },
  { img: '🔥', desc: '수온 상승' },
  { img: '🚧', desc: '해안 개발' },
  { img: '🐠️', desc: '산호초 파괴' },
  { img: '🧪', desc: '화학 물질' },
  { img: '👾', desc: '침입 외래종' },
  { img: '🎣️', desc: '무분별한 낚시' },
  { img: '🌊', desc: '비선택적 어획' },
  { img: '👨‍🔬', desc: '해양 산성화' },
];

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

  height: calc(100dvh - 34.8rem);
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
