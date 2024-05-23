import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import HintModal from '../common/Modal/HintModal';
import OnButton from '../common/OnButton';
import Question from '../common/Question/Question';
import SelectAnswer from '../component/Quiz/SelectAnswer';

const QuizPage = () => {
  const navigate = useNavigate();
  const [correctIc, setCorrectIc] = useState(false);
  const [failIc, setFailIc] = useState(false);
  const [modalOn, setModalOn] = useState(false);

  const handleClickHint = () => {
    setModalOn(true);
  };

  const handleClickCorrectBtn = () => {
    if (failIc) {
      setFailIc(false);
      setCorrectIc(true);
    } else {
      setCorrectIc(!correctIc);
    }
  };

  const handleClickFailBtn = () => {
    if (correctIc) {
      setCorrectIc(false);
      setFailIc(true);
    } else {
      setFailIc(!failIc);
    }
  };

  const handleClickOnBtn = () => {
    // 추후 결과 페이지로 라우팅 예정
    navigate('/');
  };

  return (
    <QuizPageWrapper>
      {modalOn && <HintModal onClose={() => setModalOn(false)} />}
      <Question
        mainQuestion={'무엇을 좋아하세요?'}
        subQuestion={'좋아하는 것과 관련한 퀴즈를 풀 수 있습니다.'}
        isQuiz={true}
      />
      <Wrapper>
        <Dummy></Dummy>
        <HintWrapper>
          <Hint onClick={handleClickHint}>힌트보기</Hint>
        </HintWrapper>
        <SelectAnswer
          correctIc={correctIc}
          failIc={failIc}
          handleClickCorrectBtn={handleClickCorrectBtn}
          handleClickFailBtn={handleClickFailBtn}
        />
      </Wrapper>
      {/* svg로 대체될 부분 */}

      <OnButton disabled={!correctIc && !failIc} handleFn={handleClickOnBtn}>
        제출
      </OnButton>
    </QuizPageWrapper>
  );
};

export default QuizPage;

const QuizPageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  margin: 4rem 0 3.4rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: calc(100dvh - 27rem);
`;

// 사라질 것
const Dummy = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.gray500};
`;

const HintWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 0.8rem;
`;

const Hint = styled.p`
  color: ${({ theme }) => theme.colors.gray600};
  ${({ theme }) => theme.fonts.h6};
`;