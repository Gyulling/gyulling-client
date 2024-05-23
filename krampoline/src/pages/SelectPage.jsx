import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import OnButton from '../common/OnButton';
import Question from '../common/Question';
import SelectTag from '../component/Select/SelectTag';

const SelectPage = () => {
  // 추후 수정될 부분, 버튼 컨트롤을 위해서 넣은 부분
  const [isActive, _] = useState(true);
  const navigate = useNavigate();

  const handleClickOnBtn = () => {
    navigate('/quiz');
  };

  return (
    <SelectPageWrapper>
      <Question
        mainQuestion={'무엇을 좋아하세요?'}
        subQuestion={'좋아하는 것과 관련한 퀴즈를 풀 수 있습니다.'}
      />
      <SelectTag />
      {/* disabled 값은 추후에 변경 예정 */}
      <OnButton disabled={!isActive} handleFn={handleClickOnBtn}>
        다음
      </OnButton>
    </SelectPageWrapper>
  );
};

export default SelectPage;

const SelectPageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;

  margin: 7.2rem 0 3.4rem;
`;
