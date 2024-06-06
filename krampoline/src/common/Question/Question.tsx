import styled, { css } from 'styled-components';
import { QuestionProps } from '../../types/CommonType/commonType';

const Question = ({ mainQuestion, subQuestion, isQuiz }: QuestionProps) => {
  return (
    <QuestionWrapper $isQuiz={isQuiz}>
      {isQuiz && <Category>OX 퀴즈</Category>}
      <MainQuestion>{mainQuestion}</MainQuestion>
      <SubQusetion>{subQuestion}</SubQusetion>
    </QuestionWrapper>
  );
};

export default Question;

const QuestionWrapper = styled.div<{ $isQuiz: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ $isQuiz }) => ($isQuiz ? css`center` : css`flex-start`)};
  justify-content: center;

  margin-bottom: 2rem;
`;

const Category = styled.p`
  margin-bottom: 1rem;
  padding: 0.5rem 1.1rem 0.3rem;
  border-radius: 0.8rem;

  ${({ theme }) => theme.fonts.h6_Semibold};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.quiz};
`;

const MainQuestion = styled.p`
  margin-bottom: 0.8rem;

  ${({ theme }) => theme.fonts.h3};
`;

const SubQusetion = styled.p`
  ${({ theme }) => theme.fonts.h6};
  color: ${({ theme }) => theme.colors.gray500};
`;
