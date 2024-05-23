import styled from 'styled-components';
import OnButton from '../common/OnButton';
import Question from '../common/Question';
import SelectTag from '../component/Select/SelectTag';

const SelectPage = () => {
  return (
    <SelectPageWrapper>
      <Question
        mainQuestion={'무엇을 좋아하세요?'}
        subQuestion={'좋아하는 것과 관련한 퀴즈를 풀 수 있습니다.'}
      />
      <SelectTag />
      {/* disabled 값은 추후에 변경 예정 */}
      <OnButton disabled={false}>다음</OnButton>
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
