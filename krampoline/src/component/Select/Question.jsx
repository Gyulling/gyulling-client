import styled from 'styled-components';

const Question = () => {
  return (
    <QuestionWrapper>
      <MainQuestion>무엇을 좋아하세요?</MainQuestion>
      <SubQusetion>좋아하는 것과 관련한 퀴즈를 풀 수 있습니다.</SubQusetion>
    </QuestionWrapper>
  );
};

export default Question;

const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.8rem;

  margin-bottom: 4.2rem;
`;

const MainQuestion = styled.p`
  ${({ theme }) => theme.fonts.h3};
`;

const SubQusetion = styled.p`
  ${({ theme }) => theme.fonts.h6};
  color: ${({ theme }) => theme.colors.gray500};
`;
