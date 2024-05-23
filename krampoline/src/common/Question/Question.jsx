import styled, { css } from 'styled-components';

const Question = ({ mainQuestion, subQuestion, isQuiz }) => {
  return (
    <QuestionWrapper $isQuiz={isQuiz}>
      {isQuiz && <Category>OX 퀴즈</Category>}
      <MainQuestion>{mainQuestion}</MainQuestion>
      <SubQusetion>{subQuestion}</SubQusetion>
    </QuestionWrapper>
  );
};

export default Question;

const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ $isQuiz }) => ($isQuiz ? css`center` : css`flex-start`)};
  justify-content: center;
  gap: 0.8rem;

  margin-bottom: 4.2rem;
`;

const Category = styled.p`
  ${({ theme }) => theme.fonts.h6};
  color: ${({ theme }) => theme.colors.gray400};
`;

const MainQuestion = styled.p`
  ${({ theme }) => theme.fonts.h3};
`;

const SubQusetion = styled.p`
  ${({ theme }) => theme.fonts.h6};
  color: ${({ theme }) => theme.colors.gray500};
`;
