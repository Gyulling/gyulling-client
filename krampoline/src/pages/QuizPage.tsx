import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ImgTurtle } from '../assets';
import HintModal from '../common/Modal/HintModal';
import OnButton from '../common/OnButton';
import Question from '../common/Question/Question';
import SelectAnswer from '../component/Quiz/SelectAnswer';
import postAnswer from '../libs/apis/QuizPage/postAnswer';

const QuizPage = () => {
  const navigate = useNavigate();
  const [correctIc, setCorrectIc] = useState(false);
  const [failIc, setFailIc] = useState(false);
  const [modalOn, setModalOn] = useState(false);
  const mainContents = sessionStorage.getItem('contents');

  if (!mainContents) return;

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

  const handleClickOnBtn = async () => {
    const { correct } = await postAnswer({ correctIc: false });
    navigate('/result', { state: correct });
  };

  return (
    <QuizPageWrapper>
      {modalOn && <HintModal onClose={() => setModalOn(false)} />}
      <Question
        mainQuestion={mainContents}
        subQuestion={'좋아하는 것과 관련한 퀴즈를 풀 수 있습니다.'}
        isQuiz={true}
      />
      <Wrapper>
        <ImgWrapper>
          <ImgTurtle />
        </ImgWrapper>

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

      <OnButton
        disabled={!correctIc && !failIc}
        isQuiz={true}
        handleFn={handleClickOnBtn}
      >
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
  height: calc(100dvh - 7.4rem);

  margin: 4rem 0 3.4rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: calc(100dvh - 27rem);
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2.8rem 0 3.7rem;
`;

const HintWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const Hint = styled.p`
  color: ${({ theme }) => theme.colors.gray600};
  ${({ theme }) => theme.fonts.h6};
`;
