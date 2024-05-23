import styled from 'styled-components';
import Question from '../component/Select/Question';
import SelectTag from '../component/Select/SelectTag';

const SelectPage = () => {
  return (
    <SelectPageWrapper>
      <Question />
      <SelectTag />
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
  /* height: 100dvh; */
  margin: 7.2rem 0 3.4rem;
`;
