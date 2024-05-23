import styled from 'styled-components';
import OnButton from '../common/OnButton';
import Question from '../component/Select/Question';
import SelectTag from '../component/Select/SelectTag';

const SelectPage = () => {
  return (
    <SelectPageWrapper>
      <Question />
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
