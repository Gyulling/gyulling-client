import styled from 'styled-components';

const Contents = ({ textArr }) => {
  return (
    <ContentsWrapper>
      <IconWrapper></IconWrapper>
      <TextWrapper>
        {textArr.map((text, idx) => {
          return <Text key={idx}>{text}</Text>;
        })}
      </TextWrapper>
    </ContentsWrapper>
  );
};

export default Contents;

const ContentsWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  // 나중에 수정될 수 있음
  gap: 0.8rem;
`;

const IconWrapper = styled.div`
  width: 6rem;
  height: 10.5rem;

  // 나중에 지울 코드
  background-color: ${({ theme }) => theme.colors.sub};
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.h6};
`;
