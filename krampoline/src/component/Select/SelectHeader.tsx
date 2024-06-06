import styled from 'styled-components';

const SelectHeader = () => {
  return (
    <HeaderWrapper>
      <Title>관심있는 주제를 선택해주세요</Title>
      <SubWrapper>
        <Wrapper>
          <Sub>관심있는 주제를 </Sub> <Point>1가지</Point>
          <Sub> 이상 선택해주세요.</Sub>
        </Wrapper>

        <Sub>내게 꼭 맞는 퀴즈를 풀 수 있습니다!</Sub>
      </SubWrapper>
    </HeaderWrapper>
  );
};

export default SelectHeader;

const HeaderWrapper = styled.article`
  display: flex;
  flex-direction: column;
  margin-bottom: 3.2rem;
  width: 100%;

  gap: 0.7rem;
`;

const Title = styled.p`
  margin: 0 11rem;

  text-align: center;
  word-break: keep-all;
  ${({ theme }) => theme.fonts.h3};
  color: ${({ theme }) => theme.colors.gray900};
`;

const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
`;

const Sub = styled.p`
  ${({ theme }) => theme.fonts.h6};
  color: ${({ theme }) => theme.colors.gray500};
`;

const Point = styled.p`
  ${({ theme }) => theme.fonts.h6};
  color: ${({ theme }) => theme.colors.prime};
`;
