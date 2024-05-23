import styled from 'styled-components';

const Question = ({ mainQuestion, subQuestion }) => {
  return (
    <QuestionWrapper>
      <MainQuestion>{mainQuestion}</MainQuestion>
      <SubQusetion>{subQuestion}</SubQusetion>
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
