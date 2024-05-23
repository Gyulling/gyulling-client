import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import OnButton from '../common/OnButton';
import Question from '../common/Question';
import SelectAnswer from '../component/Quiz/SelectAnswer';

const QuizPage = () => {
  // 추후 수정될 부분, 버튼 컨트롤을 위해서 넣은 부분
  const [isActive, _] = useState(true);
  const navigate = useNavigate();

  const handleClickOnBtn = () => {
    // 추후 결과 페이지로 라우팅 예정
    navigate('/');
  };

  return (
    <QuizPageWrapper>
      <Question
        mainQuestion={'무엇을 좋아하세요?'}
        subQuestion={'좋아하는 것과 관련한 퀴즈를 풀 수 있습니다.'}
        isQuiz={true}
      />
      <Wrapper>
        <Dummy></Dummy>
        <SelectAnswer />
      </Wrapper>
      {/* svg로 대체될 부분 */}

      {/* disabled 값은 추후에 변경 예정 */}
      <OnButton disabled={!isActive} handleFn={handleClickOnBtn}>
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
  width: 20rem;
  height: 19.5rem;
`;
